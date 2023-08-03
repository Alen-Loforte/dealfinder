<template>
  <div class="icon-container">
    <q-icon :size="size">
      <BaseTooltip label="Store" />
      <img :src="getCustomIcon(storeNum)" />
    </q-icon>
  </div>
</template>

<script setup>
const props = defineProps({
  storeNum: {
    type: String,
  },
  color: {
    type: String,
    default: "red",
  },
  size: {
    type: String,
    default: "2rem",
  },
});

function getCustomIcon(storeNumber) {
  switch (storeNumber) {
    case "1":
      return "src/assets/icons/steam-icon.svg";
      break;
    case "2":
      return "src/assets/icons/gamersgate-icon.svg";
      break;
    case "3":
      return "src/assets/icons/greenmangaming-icon.svg";
      break;
    case "4":
      return "src/assets/icons/amazon-icon.svg";
      break;
    case "5":
      return "src/assets/icons/gamestop-icon.svg";
      break;
    case "6":
      return "src/assets/icons/direct2drive-icon.svg";
      break;
    case "7":
      return "src/assets/icons/gog-icon.svg";
      break;
    case "8":
      return "src/assets/icons/origin-icon.svg";
      break;
    case "11":
      return "src/assets/icons/humble-icon.svg";
      break;
    case "13":
      return "src/assets/icons/uplay-icon.svg";
      break;
    case "15":
      return "src/assets/icons/fanatical-icon.svg";
      break;
    case "21":
      return "src/assets/icons/wingamestore-icon.svg";
      break;
    case "23":
      return "src/assets/icons/gamebillet-icon.svg";
      break;
    case "24":
      return "src/assets/icons/voidu-icon.svg";
      break;
    case "25":
      return "src/assets/icons/epicgames-icon.svg";
      break;
    case "27":
      return "src/assets/icons/gamesplanet-icon.svg";
      break;
    case "28":
      return "src/assets/icons/gamesload-icon.svg";
      break;
    case "31":
      return "src/assets/icons/blizzard-icon.svg";
      break;
    default:
      return "src/assets/icons/noicon-icon.svg";
      break;
  }
}
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
}
</style>
