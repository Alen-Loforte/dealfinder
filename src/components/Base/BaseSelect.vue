<template>
  <q-select
    :model-value="value"
    :options="options"
    :label="label"
    :hint="hint"
    :max-values="maxValues"
    :multiple="multiple"
    :dense="isDense"
    class="global-form-control"
    filled
    @update:model-value="(value) => $emit('update:text', value)"
  />
</template>

<script setup>
const props = defineProps({
  value: {
    type: [String, Number],
    default: null,
  },
  options: {
    type: [Array, Object],
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  isDense: {
    type: String,
  },
  hint: {
    type: String,
  },
  maxValues: {
    type: [String, Number],
    default: null,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
