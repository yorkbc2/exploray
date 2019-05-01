<template>
  <div class="product-list-wrapper">
    <div class="row">
      <div
        v-for="(item, index) in data"
        :class="{'col-md-4 col-xs-12 col-sm-6': !strokeView, 'col-md-12': strokeView}"
        :key="index"
      >
        <product-card :data="item" :strokeView="strokeView"/>
      </div>
    </div>
    <button class="button button-green button-block">
      <i class="fa fa-plus"></i>&nbsp;&nbsp;Показать ещё туры
    </button>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: {
    data: Array,
    strokeView: Boolean
  },
  components: {
    ProductCard
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.product-list-wrapper {
  .row {
    .col-sm-6 {
      @media screen and (min-width: 480px) and (max-width: 768px) {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }
  .button.button-block {
    @media screen and (max-width: 768px) {
      max-width: 640px;
    }
  }
}
</style>
