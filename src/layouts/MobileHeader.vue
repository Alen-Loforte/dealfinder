<template>
  <q-header elevated class="bg-primary">
    <q-toolbar class="toolbar-style">
      <BaseButton icon="menu" round @click="ToggleLeftDrawer" />
      <q-icon
        name="img:/big_icon_with_name.svg"
        style="height: 20%; width: 20%"
        @click="$emit('goToHomePage')"
      />
    </q-toolbar>
    <q-drawer
      class="bg-primary"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      behavior="mobile"
      style="display: flex; flex-direction: column; align-content: flex-start"
    >
      <BaseButton to="/home" align="left" label="home" class="store-button" />
      <q-expansion-item
        label="Stores"
        style="
          line-height: 1.715em;
          font-weight: 500;
          font-size: 1.4rem;
          color: #d9d9d9;
        "
      >
        <q-list v-for="store in storeList" :key="store.storeID">
          <q-item
            v-if="store.isActive != 0"
            clickable
            v-close-popup
            @click="$emit('storeClicked', store)"
            style="font-size: 1rem; margin-left: 10%"
            class="text-blue-6"
          >
            <q-item-section>{{ store.storeName }}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <!-- <BaseButton
        stretch
        no-caps
        label="Store"
        :class="
          storeButtonState($route.path) ? 'store-button-active' : 'store-button'
        "
      >

      </BaseButton> -->
    </q-drawer>
  </q-header>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const props = defineProps({
  storeList: Array,
});

function ToggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
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
  margin-bottom: 1%;
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
</style>
