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
      <input-date-picker/>
    </tab>
    
    <tab header="Уровень комфорта">
      <input-date-picker/>
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
export default {
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
