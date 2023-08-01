import BaseInput from "../components/Base/BaseInput.vue";
import BasePage from "../components/Base/BasePage.vue";
import BaseIcon from "../components/Base/BaseIcon.vue";
import BaseGameCard from "../components/Base/BaseGameCard.vue";
import BaseInputPassword from "../components/Base/BaseInputPassword.vue";
import BaseSelect from "../components/Base/BaseSelect.vue";
import BaseButton from "../components/Base/BaseButton.vue";
import BasePageLink from "../components/Base/BasePageLink.vue";
import BaseTooltip from "../components/Base/BaseTooltip.vue";
import BaseDropdownButton from "../components/Base/BaseDropdownButton.vue";

export default ({ app }) => {
  app.component("BaseInput", BaseInput);
  app.component("BasePage", BasePage);
  app.component("BaseIcon", BaseIcon);
  app.component("BaseGameCard", BaseGameCard);
  app.component("BaseSelect", BaseSelect);
  app.component("BaseButton", BaseButton);
  app.component("BaseInputPassword", BaseInputPassword);
  app.component("BasePageLink", BasePageLink);
  app.component("BaseTooltip", BaseTooltip);
  app.component("BaseDropdownButton", BaseDropdownButton);
};
