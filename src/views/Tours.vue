<template>
  <div class="tours">
    <app-header
      title="Сравнивай и выбирай лучшее"
      :breads="{'/': 'Главная', '/tours': 'Путешествия'}"
      background="/images/tours_bg.jpg"
    >
      <p>Form here...</p>
    </app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <product-filters/>
        </div>
        <div class="col-md-9">
          <product-controls />
          <product-list :data="items" :strokeView="$store.getters.strokeView"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductFilters from "@/components/Product/ProductFilters.vue";
import ProductControls from "@/components/Product/ProductControls.vue";
export default {
  components: {
    "app-header": Header,
    "product-list": ProductList,
    "product-filters": ProductFilters,
    "product-controls": ProductControls
  },
  data() {
    return {
      items: this.$store.getters.data,
      strokeView: this.$store.getters.strokeView
    };
  }
};
</script>
