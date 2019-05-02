import Vue from "vue";
import router from "./router";
import store from "./store";
import InputCheckPicker from "@/components/Forms/InputCheckPicker.vue";
import InputDatePicker from "@/components/Forms/InputDatePicker.vue";
import InputPriceRange from "@/components/Forms/InputPriceRange.vue";
import { Carousel, Slide } from "vue-carousel";
import Icon from "@/components/Icons/Icon.vue";
import Img2Svg from "@/components/Icons/Img2Svg.vue";
import SocialList from "@/components/Lists/SocialList.vue";
import CustomSelect from "@/components/Forms/CustomSelect.vue";
import Checkbox from "@/components/Forms/Checkbox.vue";
import InputStars from "@/components/Forms/InputStars.vue";
import OffsetBlock from "@/components/Blocks/OffsetBlock.vue";
import Card from "@/components/Blocks/Card.vue";
import cutFilter from "@/filters/cut.js";
import formattedNumberFilter from "@/filters/formattedNumber.js";
import App from "./App.vue";
import DefaultSlider from "@/components/Sliders/DefaultSlider.vue";
Vue.config.productionTip = false;

Vue.component("input-check-picker", InputCheckPicker);
Vue.component("input-date-picker", InputDatePicker);
Vue.component("input-price-range", InputPriceRange);
Vue.component("social-list", SocialList);
Vue.component("icon", Icon);
Vue.component("img-to-svg", Img2Svg);
Vue.component("carousel", Carousel);
Vue.component("slide", Slide);
Vue.component("custom-select", CustomSelect);
Vue.component("checkbox", Checkbox);
Vue.component("app-default-slider", DefaultSlider);
Vue.component("offset-block", OffsetBlock);
Vue.filter("cut", cutFilter);
Vue.filter("formattedNumber", formattedNumberFilter);
Vue.component("app-stars", InputStars);
Vue.component("card", Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
