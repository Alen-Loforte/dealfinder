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
          <q-route-tab no-caps to="/page2" label="Stores" />
          <q-route-tab no-caps to="/page3" label="About" />
        </q-tabs>
        <div>
          <q-icon
            name="img:/big_icon_with_name.svg"
            style="height: 80px; width: 80px"
          />
        </div>
        <div class="search-container">
          <BaseIcon name="search" style="margin-right: 0.5rem" />
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
import { ref } from "vue";
let gameToSeach = ref("");
</script>

<style lang="scss" scoped>
.toolbar-style {
  display: flex;
  justify-content: space-between;
}
.tab-style {
  height: 6rem;
  color: $font-color;
}
.link-active {
  text-decoration: underline;
}
.search-container {
  display: flex;
  border: 2px solid $red;
  border-radius: 6px;
  padding: 0.3rem;
  min-width: 20%;
}
</style>
