<template>
  <q-page class="flex container-style">
    <slot></slot>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.container-style {
  background-color: $background-color;
  padding: 1em;
  display: flex;
  justify-content: center;
}
</style>
