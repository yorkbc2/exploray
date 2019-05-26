<template>
  <div class="product-controls-wrapper">
    <div class="product-controls d-flex justify-content-between" v-if="!hideSort">
      <div class="product-controls__sort d-flex">
        <strong class="d-flex flex-column justify-content-center">Сортировать по:</strong>
        <div class="product-controls__sort-element">
          <span>цене</span>
          &nbsp;
          <advanced-select
            :options="[
            {value: 'по возрастанию'},
            {value: 'по убыванию'}
          ]"
            placeholder="выбрать"
          />
        </div>
        <div class="product-controls__sort-element">
          <span>рейтингу</span>
          <advanced-select
            :options="[
            {value: 'по возрастанию'},
            {value: 'по убыванию'}
          ]"
            placeholder="выбрать"
          />
        </div>
      </div>
      <div class="product-controls__actions d-flex flex-column justify-content-center">
        <div>
          <button @click="toggle(false)" :class="{ active: !$store.getters.strokeView }">
            <icon name="squares"/>
          </button>
          <button @click="toggle(true)" :class="{ active: $store.getters.strokeView }">
            <icon name="bars"/>
          </button>
        </div>
      </div>
    </div>
    <div class="product-controls-active-filters" v-if="$store.getters.filters.length">
      <span
        class="product-controls-active-filters__item"
        v-for="(filter, index) in $store.getters.filters"
        :key="index"
      >
        <app-stars
          v-if="filter.id.indexOf('stars') !== -1"
          :stars="filter.value"
          :hideEmpty="true"
        />
        <template v-else>{{ filter | filterLabel }}</template>
        <i
          class="product-controls-active-filters__item-closer"
          @click="removeFilter(filter)"
        >&times;</i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-controls",
  props: {
    hideSort: Boolean
  },
  methods: {
    toggle(enable) {
      this.$store.commit(enable ? "ENABLE_STROKE_VIEW" : "DISABLE_STROKE_VIEW");
    },
    removeFilter(filter) {
      const currentFilter = {
        ...filter,
        delete: true,
        force: true,
        id: filter.id
      };
      this.$store.commit("CHANGE_FILTERS", currentFilter);
      this.$emit("remove", filter);
    }
  }
};
</script>

<style lang="scss">
.product-controls__sort {
  &-element {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 7px;
      margin-left: 10px;
    }

    @media screen and (max-width: 767px) {
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 25px;
    padding: 0 15px;

    strong {
      display: block;
      margin-bottom: 15px;
    }
  }

  .advanced-select {
    max-width: 180px;
    border-radius: 50px;

    &:hover {
      .advanced-select__current {
        background-color: darken(#f6f6f6, 5%);
        color: #a3a3a3;

        .svg-inserted svg {
          fill: #a3a3a3 !important;
        }
      }
    }
    &__dropdown {
      border: 1px solid #d5d5d5;
      border-top: 0px;
      li {
        background-color: #f6f6f6;
        text-align: left;
        color: #a3a3a3;
        padding: 10px 20px;
        font-size: 14px;
        &:hover {
          background-color: darken(#f6f6f6, 5%);
          color: #a3a3a3;
        }
      }
    }
    &__current {
      background-color: #f6f6f6;
      border-radius: 50px;
      color: #a3a3a3;
      padding: 9px 25px 9px 20px;
      border: 1px solid #d5d5d5;
      text-align: left;
      font-size: 14px;
      .svg-inserted svg {
        fill: #a3a3a3 !important;
      }
    }
  }
}

.product-controls {
  &__actions {
    @media screen and (max-width: 767px) {
      display: none !important;
    }
    > div {
      display: flex;
    }
    button {
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-right: 2px;
      }
      &:hover,
      &.active {
        background-color: #e1e1e1;
      }
      width: 30px;
      height: 31px;
      padding: 0px;
      border-radius: 2px;
      border: 1px solid #e1e1e1;
      background: transparent;
      transform: scale(1.1);
    }
  }
}
.product-controls-active-filters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 15px 20px 5px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 2.5px 1.33px 5px 0px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  &__item {
    position: relative;
    margin-right: 10px;
    display: inline-block;
    padding: 6px 25px 6px 15px;
    border: 1px solid #0dba00;
    border-radius: 50px;
    font-size: 12px;
    margin-bottom: 10px;
    .stars {
      li {
        i {
          font-size: 14px;
        }
      }
    }
    i.product-controls-active-filters__item-closer {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      color: #0dba00;
      font-style: normal;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>