export function GetStoreIcon(storeID) {
  switch (storeID) {
    case "1":
      return "/src/assets/icons/steam-icon.svg";
    case "2":
      return "/src/assets/icons/gamersgate-icon.svg";
    case "3":
      return "/src/assets/icons/greenmangaming-icon.svg";
    case "4":
      return "/src/assets/icons/amazon-icon.svg";
    case "5":
      return "/src/assets/icons/gamestop-icon.svg";
    case "6":
      return "/src/assets/icons/direct2drive-icon.svg";
    case "7":
      return "/src/assets/icons/gog-icon.svg";
    case "8":
      return "/src/assets/icons/origin-icon.svg";
    case "11":
      return "/src/assets/icons/humble-icon.svg";
    case "13":
      return "/src/assets/icons/uplay-icon.svg";
    case "15":
      return "/src/assets/icons/fanatical-icon.svg";
    case "21":
      return "/src/assets/icons/wingamestore-icon.svg";
    case "23":
      return "/src/assets/icons/gamebillet-icon.svg";
    case "24":
      return "/src/assets/icons/voidu-icon.svg";
    case "25":
      return "/src/assets/icons/epicgames-icon.svg";
    case "27":
      return "/src/assets/icons/gamesplanet-icon.svg";
    case "30":
      return "/src/assets/icons/indegala-icon.svg";
    case "31":
      return "/src/assets/icons/blizzard-icon.svg";
    case "34":
      return "/src/assets/icons/noctre-icon.svg";
    default:
      return "/src/assets/icons/noicon-icon.svg";
  }
}

export function GetStoreName(storeID) {
  switch (storeID) {
    case "1":
      return "Steam";
    case "2":
      return "GamersGate";
    case "3":
      return "GreenManGaming";
    case "4":
      return "Amazon";
    case "5":
      return "GameStop";
    case "6":
      return "Direct2Drive";
    case "7":
      return "GOG";
    case "8":
      return "Origin";
    case "11":
      return "Humble Bundle";
    case "13":
      return "UPlay";
    case "15":
      return "Fanatical";
    case "21":
      return "WinGameStore";
    case "23":
      return "Game billet";
    case "24":
      return "Voidu";
    case "25":
      return "EpicGames";
    case "27":
      return "GamesPlanet";
    case "28":
      return "GamesLoad";
    case "29":
      return "2Game";
    case "30":
      return "InideGala";
    case "31":
      return "Blizzard";
    case "34":
      return "Noctre";
    case "35":
      return "DreamGame";
    default:
      return "No name";
  }
}

export function GetStoreID(storeName) {
  switch (storeName) {
    case "Steam":
      return "1";
    case "GamersGate":
      return "2";
    case "GreenManGaming":
      return "3";
    case "Amazon":
      return "4";
    case "GameStop":
      return "5";
    case "Direct2Drive":
      return "6";
    case "GOG":
      return "7";
    case "Origin":
      return "8";
    case "Humble Store":
      return "11";
    case "Uplay":
      return "13";
    case "Fanatical":
      return "15";
    case "WinGameStore":
      return "21";
    case "GameBillet":
      return "23";
    case "Voidu":
      return "24";
    case "Epic Games Store":
      return "25";
    case "Gamesplanet":
      return "27";
    case "Gamesload":
      return "28";
    case "2Game":
      return "29";
    case "IndieGala":
      return "30";
    case "Blizzard Shop":
      return "31";
    case "DLGamer":
      return "33";
    case "Noctre":
      return "34";
    case "DreamGame":
      return "35";
    default:
      return "999";
  }
}
