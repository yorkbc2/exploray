import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import InputCheckPicker from "@/components/Forms/InputCheckPicker.vue";
import InputDatePicker from "@/components/Forms/InputDatePicker.vue";
import Icon from "@/components/Icons/Icon.vue";
import Img2Svg from "@/components/Icons/Img2Svg.vue";

Vue.config.productionTip = false;

Vue.component("input-check-picker", InputCheckPicker);
Vue.component("input-date-picker", InputDatePicker);
Vue.component("icon", Icon);
Vue.component("img-to-svg", Img2Svg);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
