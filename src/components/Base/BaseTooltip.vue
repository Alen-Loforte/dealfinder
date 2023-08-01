<template>
  <q-tooltip
    :class="customStyle ? customStyle : 'text-body2 bg-primary text-white'"
  >
    {{ label }}
  </q-tooltip>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  customStyle: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
