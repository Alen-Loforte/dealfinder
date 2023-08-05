<template>
  <div>
    <div class="content-container">
      <BaseGameCard
        v-for="dealItem in dealList"
        :key="dealItem.dealID"
        :dealDetail="dealItem"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDealStore } from "src/stores/deal-store";
const store = useDealStore();
const { dealList } = storeToRefs(store);

onMounted(() => {
  store.getDealsList();
});
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.85rem;
}
</style>
