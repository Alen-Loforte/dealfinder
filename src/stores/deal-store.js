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
    getDealsList() {
      return api({
        method: "get",
        url: "deals",
      })
        .then((response) => {
          this.dealList = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.error("An error ocurred" + error);
        });
    },
  },
});
