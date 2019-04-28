<template>
  <div class="product-filters">
    <h3>Фильтр</h3>
    <tab header="Наличие мест">
      <input-date-picker/>
    </tab>

    <tab header="Период проведения">
      <input-date-picker/>
    </tab>

    <tab header="Цена, руб.">
      <input-price-range :range="20000" />
    </tab>

    <tab header="Уровень комфорта">
      <checkbox v-for="(level, index) in levels" :key="index" :label="level"/>
    </tab>

    <tab header="Наличие визы">
      <input-date-picker/>
    </tab>

    <tab header="Горящие туры">
      <input-date-picker/>
    </tab>
  </div>
</template>

<script>
import Tab from "@/components/Blocks/Tab.vue";
import Checkbox from "@/components/Forms/Checkbox.vue";
export default {
  components: {
    checkbox: Checkbox
  },
  data() {
    return {
      levels: [
        "Отдельное проживание",
        "Проживание группой",
        "Без гида, самостоятельно",
        "С гидом"
      ]
    };
  },
  components: {
    Tab
  }
};
</script>

<style lang="scss" scoped>
.product-filters {
  h3 {
    font-size: 18px;
    padding-left: 5px;
    font-weight: bolder;
    margin-bottom: 15px;
  }
}
</style>
