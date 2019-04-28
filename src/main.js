import Vue from "vue";
import router from "./router";
import store from "./store";
import InputCheckPicker from "@/components/Forms/InputCheckPicker.vue";
import InputDatePicker from "@/components/Forms/InputDatePicker.vue";
import InputPriceRange from "@/components/Forms/InputPriceRange.vue";
import { Carousel, Slide } from "vue-carousel";
import Icon from "@/components/Icons/Icon.vue";
import Img2Svg from "@/components/Icons/Img2Svg.vue";
import CustomSelect from "@/components/Forms/CustomSelect.vue";
import OffsetBlock from "@/components/Blocks/OffsetBlock.vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component("input-check-picker", InputCheckPicker);
Vue.component("input-date-picker", InputDatePicker);
Vue.component("input-price-range", InputPriceRange);
Vue.component("icon", Icon);
Vue.component("img-to-svg", Img2Svg);
Vue.component("carousel", Carousel);
Vue.component("slide", Slide);
Vue.component("custom-select", CustomSelect);
Vue.component("offset-block", OffsetBlock);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
