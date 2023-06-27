<template>
  <q-card class="card-content">
    <div class="card-style">
      <div @click="goToGame" class="img-container">
        <q-img :src="dealDetail.thumb" class="img-style" />
      </div>
      <div class="q-mt-md">
        <div class="multi-line">
          <span class="text-h6">
            {{ $t("title") }}
          </span>
          <span class="text-body1">{{ dealDetail.title }} </span>
        </div>
        <div class="flex">
          <div>
            <span class="text-h6">{{ $t("price") }}</span>
            <span class="text-body1">{{ dealDetail.normalPrice }}$</span>
          </div>
          <div class="q-ml-lg">
            <span class="text-h6">{{ $t("salePrice") }}</span>
            <span class="text-body1"> {{ dealDetail.salePrice }}$</span>
          </div>
        </div>
        <div>
          <span class="text-h6">{{ $t("store") }}</span>
          <span class="text-body1"> {{ dealDetail.storeID }} - WIP</span>
        </div>
        <div>
          <span class="text-h6">{{ $t("dealRating") }}</span>
          <span
            :class="
              dealDetail.dealRating > 8.9
                ? 'text-body1 text-positive'
                : 'text-body1 text-negative'
            "
          >
            {{ dealDetail.dealRating }}
          </span>
        </div>
        <div>
          <!--
            If the game is rated on metacritic it will show the rating
          -->
          <div v-if="dealDetail.metacriticScore > 0">
            <span class="text-h6">{{ $t("metaCriticScore") }}</span>
            <span class="text-body1"> {{ dealDetail.metacriticScore }}</span>
          </div>
          <div v-else>
            <span class="text-h6">{{ $t("metaCriticScore") }}</span>
            <span class="text-body1"> Not Rated</span>
          </div>
        </div>

        <div>
          <!-- 
            If the game is rated on steam it will show steam score
           -->
          <div v-if="dealDetail.steamRatingPercent > 0">
            <span class="text-h6">{{ $t("steamScore") }}</span>
            <span class="text-body1">
              {{ dealDetail.steamRatingPercent }}%({{
                dealDetail.steamRatingText
              }})
            </span>
          </div>
          <!--
            Else it shows not rated
          -->
          <div v-else>
            <span class="text-h6">{{ $t("steamScore") }}</span>
            <span class="text-body1"> Not Rated </span>
          </div>
        </div>
        <div>
          <span class="text-h6">{{ $t("releaseDay") }}</span>
          <span class="text-body1">{{ releaseDate }}</span>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  dealDetail: {
    type: Object,
    required: true,
  },
});

function goToGame() {
  window.open(
    "https://www.cheapshark.com/redirect?dealID={" +
      props.dealDetail.dealID +
      "}",
    "_blank",
    "noreferrer"
  );
}

const releaseDate = computed(() => {
  const convertedDate = new Date(props.dealDetail.releaseDate * 1000);
  return (
    convertedDate.getDay() +
    "/" +
    convertedDate.getMonth() +
    "/" +
    convertedDate.getFullYear()
  );
});
</script>

<style lang="scss" scoped>
.card-content {
  background-color: $primary;
  padding: 0.5rem;
  width: 400px;
  min-height: 350px;
}
.card-style {
  display: flex;
  flex-direction: column;
  color: $white;
  margin: 8px;
}
.img-container {
  display: contents;
}
.img-style {
  border-radius: 3px;
  align-self: center;
  width: 100%;
  height: 130px;
  object-fit: cover;
  cursor: pointer;
}
.positive-deal {
  color: $positive;
}
.negative-deal {
  color: $negative;
}
.multi-line {
  height: 4rem;
}
</style>
