import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useDealStore = defineStore("deals", {
  state: () => ({
    dealList: [],
    storeList: [],
  }),
  getters: {
    getDealList: (state) => state.dealList,
    getStoreList: (state) => state.storeList,
  },
  actions: {
    FetchDealList(pageNumber) {
      return api({
        method: "get",
        url: `deals?pageNumber=${pageNumber}&pageSize=30`,
      }).then((response) => {
        this.dealList = response.data;
      });
    },

    FetchStoreList() {
      return api({
        method: "get",
        url: "/stores",
      }).then((response) => {
        this.storeList = response.data;
      });
    },

    FetchSpecififcStoreDealList(pageNumber, storeID) {
      return api({
        method: "get",
        url: `deals?storeID=${storeID}&pageNumber=${pageNumber}&pageSize=30`,
      }).then((response) => {
        this.dealList = response.data;
      });
    },
  },
});
