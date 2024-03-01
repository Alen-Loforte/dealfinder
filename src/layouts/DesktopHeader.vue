<template>
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
          <q-menu style="border: 1px solid #00f0ff; border-radius: 6px">
            <q-list class="q-list" max-width="30vw">
              <span v-for="store in storeList" :key="store.storeID">
                <q-item
                  v-if="store.isActive != 0"
                  clickable
                  v-close-popup
                  @click="$emit('storeClicked', store)"
                  class="text-blue-6"
                >
                  <q-item-section>{{ store.storeName }}</q-item-section>
                </q-item>
              </span>
            </q-list>
          </q-menu>
        </q-btn>
      </q-tabs>
      <div>
        <q-icon
          name="img:/big_icon_with_name.svg"
          style="height: 80px; width: 80px"
          @click="$emit('goToHomePage')"
        />
      </div>
      <!-- <div class="search-container">
        <BaseIcon name="search" style="margin-right: 0.5rem; color: #00f0ff" />
        <BaseInput
          v-model="gameToSearch"
          :debounce="700"
          :isDense="true"
          style="width: 100%"
        />
      </div> -->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useDealStore } from "src/stores/deal-store";

const dealStore = useDealStore();

const props = defineProps({
  storeList: Array,
});

const gameToSearch = ref("");

function storeButtonState(currentPath) {
  if (currentPath.includes("/store")) {
    return true;
  } else {
    return false;
  }
}

watch(gameToSearch, (newValue, oldValue) => {
  if (newValue == "") {
    dealStore.FetchDealList(0);
  } else {
    dealStore.SearchGame(newValue);
  }
});
</script>

<style lang="scss" scoped>
.toolbar-style {
  display: flex;
  justify-content: space-between;
}
.tab-style {
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
.q-list {
  background-color: $primary;
  max-width: 52vw;
  display: flex;
  flex-wrap: wrap;
}
</style>
