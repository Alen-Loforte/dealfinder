export function GetStoreIcon(storeID) {
  let iconName = "";
  switch (storeID) {
    case "1":
      iconName = "steam-icon.svg";
      break;
    case "2":
      iconName = "gamersgate-icon.svg";
      break;
    case "3":
      iconName = "greenmangaming-icon.svg";
      break;
    case "4":
      iconName = "amazon-icon.svg";
      break;
    case "5":
      iconName = "gamestop-icon.svg";
      break;
    case "6":
      iconName = "direct2drive-icon.svg";
      break;
    case "7":
      iconName = "gog-icon.svg";
      break;
    case "8":
      iconName = "origin-icon.svg";
      break;
    case "11":
      iconName = "humble-icon.svg";
      break;
    case "13":
      iconName = "uplay-icon.svg";
      break;
    case "15":
      iconName = "fanatical-icon.svg";
      break;
    case "21":
      iconName = "wingamestore-icon.svg";
      break;
    case "23":
      iconName = "gamebillet-icon.svg";
      break;
    case "24":
      iconName = "voidu-icon.svg";
      break;
    case "25":
      iconName = "epicgames-icon.svg";
      break;
    case "27":
      iconName = "gamesplanet-icon.svg";
      break;
    case "30":
      iconName = "indegala-icon.svg";
      break;
    case "31":
      iconName = "blizzard-icon.svg";
      break;
    case "34":
      iconName = "noctre-icon.svg";
      break;
    default:
      iconName = "noicon-icon.svg";
      break;
  }
  const iconFullPath = new URL(`../assets/icons/${iconName}`, import.meta.url)
    .href;
  return iconFullPath;
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
