<template>
  <q-btn-dropdown :label="label" color="primary">
    <slot></slot>
  </q-btn-dropdown>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
