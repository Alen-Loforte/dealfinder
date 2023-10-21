<template>
  <div>
    <div class="storeName-container">
      <BaseStoreIcon :storeNum="storeID" :showTooltip="false" size="3rem" />
      {{ route.params.storeName }} Store
    </div>
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
        :max-pages="6"
        direction-links
        flat
        size="1vw"
        color="grey"
        active-color="primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useDealStore } from "src/stores/deal-store";
import { GetStoreID } from "src/composables/StoreHelperFunctions";

const dealStore = useDealStore();
const route = useRoute();
const { dealList } = storeToRefs(dealStore);

// Vars
const storeID = ref("");
const currentPage = ref(1);
const loadingContent = ref(true);

onMounted(() => {
  storeID.value = GetStoreID(route.params.storeName);
  dealStore
    .FetchSpecififcStoreDealList(currentPage.value - 1, storeID.value)
    .then(() => {
      loadingContent.value = false;
    });
});

watch(currentPage, (oldPage) => {
  loadingContent.value = true;
  window.scrollTo(0, 0);
  dealStore
    .FetchSpecififcStoreDealList(currentPage.value - 1, storeID.value)
    .then(() => {
      loadingContent.value = false;
    });
});

watch(route, () => {
  storeID.value = GetStoreID(route.params.storeName);
  loadingContent.value = true;
  dealStore
    .FetchSpecififcStoreDealList(currentPage.value - 1, storeID.value)
    .then(() => {
      loadingContent.value = false;
    });
});
</script>

<style lang="scss" scoped>
.storeName-container {
  display: flex;
  color: $cyber-blue;
  font-size: 2rem;
  gap: 0.7rem;
  margin-bottom: 3vh;
}
</style>
