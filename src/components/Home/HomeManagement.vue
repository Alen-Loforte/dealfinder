<template>
  <div>
    <div class="content-container">
      <BaseGameCard
        v-for="dealItem in dealList"
        :key="dealItem.dealID"
        :dealDetail="dealItem"
      />
      <q-pagination
        v-model="currentPage"
        :max="100"
        :max-pages="6"
        direction-links
        flat
        color="grey"
        active-color="primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDealStore } from "src/stores/deal-store";
const store = useDealStore();
const { dealList } = storeToRefs(store);

onMounted(() => {
  store.getDealsList(currentPage.value - 1);
});

// Vars
const currentPage = ref(1);

// Watcher
watch(currentPage, (oldPage) => {
  store.getDealsList(currentPage.value - 1);
});

function goToPage() {}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.85rem;
}
</style>
