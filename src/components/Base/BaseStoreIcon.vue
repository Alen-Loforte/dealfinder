<template>
  <div class="icon-container">
    <q-icon :size="size">
      <BaseTooltip v-if="showTooltip" :label="GetStoreName(storeNum)" />
      <img :src="getIMGPath(GetStoreIcon(storeNum))" />
    </q-icon>
  </div>
</template>

<script setup>
import {
  GetStoreIcon,
  GetStoreName,
} from "src/composables/StoreHelperFunctions";

const props = defineProps({
  storeNum: {
    type: String,
  },
  color: {
    type: String,
    default: "green",
  },
  size: {
    type: String,
    default: "2rem",
  },
  showTooltip: {
    type: Boolean,
    default: true,
  },
});

function getIMGPath(img) {
  return img ? new URL(img, import.meta.url).href : "";
}
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
}
</style>
