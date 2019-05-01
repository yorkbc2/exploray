import Vue from "vue";
import Vuex from "vuex";
import initialData from "./initialData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    strokeView: true,
    data: initialData,
    cart: [],
    showFilters: false
  },
  getters: {
    strokeView(state) {
      return state.strokeView;
    },
    data(state) {
      return state.data;
    },
    cart(state) {
      return state.cart;
    },
    showFilters(state) {
      return state.showFilters;
    }
  },
  mutations: {
    ENABLE_STROKE_VIEW(state) {
      state.strokeView = true;
    },
    DISABLE_STROKE_VIEW(state) {
      state.strokeView = false;
    },
    ADD_TO_CART(state, id) {
      let index,
        currentItem = state.data.filter((i, j) => {
          if (i._id === id) {
            index = j;
            return true;
          }
          return false;
        })[0];
      state.data[index].added = true;
      state.cart.push(currentItem);
    },
    TOGGLE_FILTERS(state) {
      state.showFilters = !state.showFilters;
    }
  }
});

export default store;
