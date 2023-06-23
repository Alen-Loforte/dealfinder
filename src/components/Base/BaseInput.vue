<template>
  <q-input
    :model-value="value"
    :label="required == true ? label + ' *' : label"
    :placeholder="placeholder"
    :type="type"
    :mask="mask"
    :readonly="isReadonly"
    :disable="isDisabled"
    :rules="rules"
    :hint="hint"
    :dense="isDense"
    hide-bottom-space
    color="red"
    @update:model-value="(value) => $emit('update:text', value)"
  />
</template>

<script setup>
const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: null,
  },
  mask: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
  },
  isDense: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
