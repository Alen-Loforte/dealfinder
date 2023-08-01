<template>
  <q-btn
    :label="label"
    :size="size"
    :color="color"
    :text-color="textColor"
    :icon="icon"
    :push="isPush"
    :dense="dense"
    :flat="flat"
    :round="round"
    :loading="isLoading"
    :no-caps="noCaps"
    :unelevated="unelevated"
    :disable="disable"
    @click="emitClick($event)"
  >
    <slot></slot>
  </q-btn>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
    default: "primary",
  },
  textColor: {
    type: String,
    default: "white",
  },
  icon: {
    type: String,
  },
  big: {
    type: Boolean,
    default: false,
  },
  isPush: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  noCaps: {
    type: Boolean,
    default: false,
  },
  unelevated: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

function emitClick(event) {
  emit("click", event);
}
</script>

<style lang="scss" scoped></style>
