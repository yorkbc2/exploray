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
      <product-list :data="items" :strokeView="strokeView"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import ProductList from "@/components/Product/ProductList.vue";
export default {
  components: {
    "app-header": Header,
    "product-list": ProductList
  },
  data() {
    return {
      items: this.$store.getters.data,
      strokeView: this.$store.getters.strokeView
    };
  }
};
</script>
