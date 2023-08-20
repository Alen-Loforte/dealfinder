<template>
  <q-card
    :class="
      dealDetail.salePrice == 0
        ? 'card-content spinningAnimation'
        : 'card-content'
    "
  >
    <div class="card-style">
      <div @click="goToGame" class="img-container">
        <q-img :src="dealDetail.thumb" class="img-style" />
      </div>
      <div class="q-mt-md">
        <div class="multi-line">
          <span class="text-h6">{{ dealDetail.title }} </span>
        </div>
        <div class="flex items-center">
          <s class="text-body1">{{ dealDetail.normalPrice }}$</s>
          <BaseIcon name="arrow_right_alt" />
          <span class="text-body1"> {{ dealDetail.salePrice }}$</span>
          <BaseStoreIcon class="q-ml-sm" :storeNum="dealDetail.storeID" />
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
        <div class="q-mt-sm">
          <u class="text-body1 link-style">More info</u>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
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

.link-style {
  cursor: pointer;
}

/* Animation */
.spinningAnimation {
  --border-size: 3px;
  --border-angle: 0turn;
  background-image: conic-gradient(
      from var(--border-angle),
      $primary,
      $primary 50%,
      $primary
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #9747ff, #f03);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
</style>
