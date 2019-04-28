import Vue from "vue";
import Vuex from "vuex";
import initialData from "./initialData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    strokeView: true,
    data: initialData
  },
  getters: {
    strokeView(state) {
      return state.strokeView;
    },
    data(state) {
      return state.data;
    }
  },
  mutations: {
    enableStrokeView(state) {
      state.strokeView = true;
    },
    disableStrokeView(state) {
      state.strokeView = false;
    }
  }
});

export default store;
