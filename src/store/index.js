import Vue from "vue";
import Vuex from "vuex";
import initialData from "./initialData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    strokeView: true,
    data: initialData,
    cart: [],
    searchResults: initialData.slice(0, 8),
    showFilters: false,
    popupOpened: false
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
    },
    popupOpened(state) {
      return state.popupOpened;
    },
    searchResults(state) {
      return state.searchResults;
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
        })[0],
        itemInCart = state.cart.filter(i => i._id === id)[0];
      if (itemInCart) {
        state.data[index].added = false;
        state.cart = state.cart.filter(x => x._id !== id);
      } else {
        state.data[index].added = true;
        state.cart.push(currentItem);
      }
    },
    TOGGLE_FILTERS(state) {
      state.showFilters = !state.showFilters;
    },
    TOGGLE_POPUP(state) {
      state.popupOpened = !state.popupOpened;
    }
  }
});

export default store;
