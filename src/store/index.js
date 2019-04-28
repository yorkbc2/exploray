import Vue from "vue";
import Vuex from "vuex";
import initialData from "./initialData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    strokeView: false,
    data: initialData
  },
  getters: {
    strokeView(state) {
      return state.strokeView;
    },
    data(state) {
      return state.data;
    }
  }
});

export default store;
