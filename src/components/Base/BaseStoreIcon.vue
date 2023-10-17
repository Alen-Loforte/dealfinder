<template>
  <div class="icon-container">
    <q-icon :size="size">
      <BaseTooltip :label="getStoreName(storeNum)" />
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
    default: "green",
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
    case "30":
      return "src/assets/icons/indegala-icon.svg";
      break;
    case "31":
      return "src/assets/icons/blizzard-icon.svg";
      break;
    case "34":
      return "src/assets/icons/noctre-icon.svg";
    default:
      return "src/assets/icons/noicon-icon.svg";
      break;
  }
}

function getStoreName(storeNumber) {
  switch (storeNumber) {
    case "1":
      return "Steam";
      break;
    case "2":
      return "GamersGate";
      break;
    case "3":
      return "GreenManGaming";
      break;
    case "4":
      return "Amazon";
      break;
    case "5":
      return "GameStop";
      break;
    case "6":
      return "Direct2Drive";
      break;
    case "7":
      return "GOG";
      break;
    case "8":
      return "Origin";
      break;
    case "11":
      return "Humble Bundle";
      break;
    case "13":
      return "UPlay";
      break;
    case "15":
      return "Fanatical";
      break;
    case "21":
      return "WinGameStore";
      break;
    case "23":
      return "Game billet";
      break;
    case "24":
      return "Voidu";
      break;
    case "25":
      return "EpicGames";
      break;
    case "27":
      return "GamesPlanet";
      break;
    case "28":
      return "GamesLoad";
      break;
    case "30":
      return "InideGala";
      break;
    case "31":
      return "Blizzard";
      break;
    case "34":
      return "Noctre";
      break;
    case "35":
      return "DreamGame";
      break;
    default:
      return "No icon";
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
