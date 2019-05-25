import Vue from "vue";
import Vuex from "vuex";
import initialData from "./initialData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    strokeView: true,
    data: initialData,
    cart: [],
    filters: [],
    searchResults: initialData.slice(0, 8),
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
    },
    searchResults(state) {
      return state.searchResults;
    },
    filters(state) {
      return state.filters;
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
    /**
     * @param {Object} state
     * @param {Object} filter
     */
    CHANGE_FILTERS(state, filter) {
      if (filter.multiple) {
        filter.id = `${filter.id}_${filter.value}`;
      }
      const currentFilter = state.filters.filter(f => f.id === filter.id)[0];
      if (currentFilter && filter.delete) {
        state.filters = state.filters.filter(f => f.id !== filter.id);
      } else if (!currentFilter) {
        state.filters.push(filter);
      } else if (currentFilter && !filter.delete) {
        state.filters = state.filters.map(f => {
          if (f.id === filter.id) {
            return filter;
          }
          return f;
        });
      }
    }
  }
});

export default store;
