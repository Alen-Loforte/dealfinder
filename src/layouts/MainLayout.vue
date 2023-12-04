<template>
  <q-layout view="hHh lpR lFr">
    <q-header elevated class="bg-primary">
      <q-toolbar class="toolbar-style">
        <q-tabs
          align="left"
          class="tab-style"
          active-class="link-active"
          indicator-color="transparent"
        >
          <q-route-tab no-caps to="/home" label="Home" />
          <q-btn
            stretch
            no-caps
            label="Store"
            :class="
              storeButtonState($route.path)
                ? 'store-button-active'
                : 'store-button'
            "
          >
            <q-menu
              style="
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                width: 40vw;
                height: 40vh;
                background-color: rgb(25, 24, 24);
              "
            >
              <q-list v-for="store in storeList" :key="store.storeID">
                <q-item
                  v-if="store.isActive != 0"
                  clickable
                  v-close-popup
                  :to="GeneratedStoreLink(store)"
                  class="text-blue-6"
                >
                  <q-item-section>{{ store.storeName }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-route-tab no-caps to="/page3" label="About" />
        </q-tabs>
        <div>
          <q-icon
            name="img:/big_icon_with_name.svg"
            style="height: 80px; width: 80px"
          />
        </div>
        <div class="search-container">
          <BaseIcon
            name="search"
            style="margin-right: 0.5rem; color: #00f0ff"
          />
          <BaseInput
            v-model="gameToSeach"
            :isDense="true"
            style="width: 100%"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDealStore } from "src/stores/deal-store";
import { storeToRefs } from "pinia";

const dealStore = useDealStore();
const { storeList } = storeToRefs(dealStore);
let gameToSeach = ref("");

onMounted(() => {
  dealStore.FetchStoreList().then(() => {});
});

function GeneratedStoreLink(storeInfo) {
  return `/store/${storeInfo.storeName}`;
}

function storeButtonState(currentPath) {
  if (currentPath.includes("/store")) {
    return true;
  } else {
    return false;
  }
}
</script>

<style lang="scss" scoped>
.toolbar-style {
  display: flex;
  justify-content: space-between;
}
.tab-style {
  height: 6rem;
  color: $white;
}
.link-active {
  text-decoration: underline;
  color: $cyber-blue;
}
.search-container {
  display: flex;
  border: 2px solid $cyber-blue;
  border-radius: 6px;
  padding: 0.3rem;
  min-width: 20%;
}
.store-button {
  line-height: 1.715em;
  font-weight: 500;
  font-size: 1.5rem;
  color: #d9d9d9;
}

.store-button-active {
  line-height: 1.715em;
  font-weight: 500;
  font-size: 1.5rem;
  color: $cyber-blue;
  text-decoration: underline;
}
</style>
