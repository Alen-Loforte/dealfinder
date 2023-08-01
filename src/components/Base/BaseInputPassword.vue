<template>
  <q-input
    :model-value="value"
    :label="required == true ? label + ' *' : label"
    :placeholder="placeholder"
    :type="isPassword ? 'password' : 'text'"
    :mask="mask"
    :readonly="isReadonly"
    :disable="isDisabled"
    :rules="rules"
    :hint="hint"
    class="global-form-control"
    filled
    @update:model-value="(value) => $emit('update:text', value)"
  >
    <template v-slot:append>
      <q-icon
        :name="isPassword ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPassword = !isPassword"
      />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: null,
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
    default: null,
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

const isPassword = ref(false);
</script>

<style lang="scss" scoped></style>
