import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useDealStore = defineStore("deals", {
  state: () => ({
    dealList: [],
    storeList: [],
    loadingContent: false,
  }),
  getters: {
    getDealList: (state) => state.dealList,
    getStoreList: (state) => state.storeList,
  },
  actions: {
    FetchDealList(pageNumber) {
      this.loadingContent = true;
      return api({
        method: "get",
        url: `deals?pageNumber=${pageNumber}&pageSize=30`,
      })
        .then((response) => {
          this.dealList = response.data;
        })
        .finally(() => {
          this.loadingContent = false;
        });
    },

    FetchStoreList() {
      this.loadingContent = true;
      return api({
        method: "get",
        url: "/stores",
      })
        .then((response) => {
          this.storeList = response.data;
        })
        .finally(() => {
          this.loadingContent = false;
        });
    },

    FetchSpecififcStoreDealList(pageNumber, storeID) {
      this.loadingContent = true;
      return api({
        method: "get",
        url: `deals?storeID=${storeID}&pageNumber=${pageNumber}&pageSize=30`,
      })
        .then((response) => {
          this.dealList = response.data;
        })
        .finally(() => {
          this.loadingContent = false;
        });
    },

    SearchGame(gameName) {
      this.loadingContent = true;
      return api({
        method: "get",
        url: `games?title=${gameName}&limit=30`,
      })
        .then((response) => {
          this.dealList = response.data;
        })
        .finally(() => {
          this.loadingContent = false;
        });
    },
  },
});
