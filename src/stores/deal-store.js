import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useDealStore = defineStore("deals", {
  state: () => ({
    dealList: [],
  }),
  getters: {
    getDealList: (state) => state.dealList,
  },
  actions: {
    getDealsList(pageNumber) {
      return api({
        method: "get",
        // url: "deals?pageNumber={pageNumber}&pageSize=30",
        url: `deals?pageNumber=${pageNumber}&pageSize=30`,

        // TODO: Need to replaced static pageNumber and pageSize
      }).then((response) => {
        this.dealList = response.data;
      });
    },
  },
});
