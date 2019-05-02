import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tours from "./views/Tours.vue";
import Single from "./views/Single.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tours",
      name: "tours",
      component: Tours
    },
    {
      path: "/tour/:id",
      name: "single-tour",
      component: Single
    }
  ]
});
