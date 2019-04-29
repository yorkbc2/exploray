<template>
  <div class="product-filters">
    <h3>Фильтр</h3>
    <tab header="Цена, руб.">
      <input-price-range :range="20000" :postfix="['руб.', 'руб.']" :interval="1"/>
    </tab>

    <tab header="Даты">
      <div class="default-date-pick">
        <input-date-picker/>
      </div>
    </tab>

    <tab header="Длительность">
      <input-price-range :range="10"/>
    </tab>

    <tab header="Число путешественников">
      <input-price-range :range="10"/>
    </tab>

    <tab header="Сложность">
      <checkbox v-for="(level, index) in levels" :key="index" :label="level" :reversed="true" />
    </tab>

    <tab header="Рейтинг">
      <checkbox v-for="(level, index) in levels" :key="index" :label="level" :reversed="true" />
    </tab>

    <tab header="Размер группы">
      <input-price-range :range="10"/>
    </tab>

    <tab header="Дополнительные параметры">
      <checkbox v-for="(level, index) in levels" :key="index" :label="level" :reversed="true" />
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
