import BaseInput from "../components/Base/BaseInput.vue";
import BasePage from "../components/Base/BasePage.vue";
import BaseIcon from "../components/Base/BaseIcon.vue";
import BaseGameCard from "../components/Base/BaseGameCard.vue";

export default ({ app }) => {
  app.component("BaseInput", BaseInput);
  app.component("BasePage", BasePage);
  app.component("BaseIcon", BaseIcon);
  app.component("BaseGameCard", BaseGameCard);
};
