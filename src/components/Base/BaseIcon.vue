<template>
  <div class="icon-container">
    <q-icon :name="name" :color="color" :size="size" />
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  color: {
    type: String,
    default: "#cyber-blue",
  },
  size: {
    type: String,
    default: "2rem",
  },
});
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
}
</style>
