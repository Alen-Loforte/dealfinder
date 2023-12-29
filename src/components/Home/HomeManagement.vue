<template>
  <div>
    <div class="global-content-container">
      <template v-if="loadingContent">
        <BaseGameCardSkeleton v-for="num in 30" :key="num" />
      </template>
      <template v-else>
        <BaseGameCard
          v-for="dealItem in dealList"
          :key="dealItem.dealID"
          :dealDetail="dealItem"
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        />
      </template>
    </div>
    <div class="global-pagination-container">
      <q-pagination
        v-if="!loadingContent"
        v-model="currentPage"
        :max="100"
        :max-pages="4"
        direction-links
        flat
        size="1em"
        color="grey"
        active-color="primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDealStore } from "src/stores/deal-store";
const store = useDealStore();
const { dealList } = storeToRefs(store);

onMounted(() => {
  store.FetchDealList(currentPage.value - 1).then(() => {
    loadingContent.value = false;
  });
});

// Vars
const currentPage = ref(1);
const loadingContent = ref(true);

// Watcher
watch(currentPage, (oldPage) => {
  loadingContent.value = true;
  window.scrollTo(0, 0);
  store.FetchDealList(currentPage.value - 1).then(() => {
    loadingContent.value = false;
  });
});

function goToPage() {}
</script>

<style lang="scss" scoped></style>
