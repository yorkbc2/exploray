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

    <tab header="Длительность, дней">
      <input-price-range :range="10"/>
    </tab>

    <tab header="Число путешественников">
      <input-price-range :range="10"/>
    </tab>

    <tab header="Сложность">
      <checkbox v-for="(item, index) in difficulty" :key="index" :label="item" :reversed="true" />
    </tab>

    <tab header="Рейтинг">
      <checkbox v-for="(item, index) in rating" :key="index" :label="item" :reversed="true" />
    </tab>

    <tab header="Размер группы">
      <input-price-range :range="10"/>
    </tab>

    <tab header="Дополнительно">
      <checkbox v-for="(item, index) in additional" :key="index" :label="item" :reversed="true" />
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
      rating: [
        "1 звезда",
        "2 звезды",
        "3 звезды",
        "4 звезды",
        "5 звезд"
      ],
      difficulty: [
        "для новичков",
        "средне",
        "сложно",
        "экстрим"
      ],
      additional: [
        "необходима виза",
        "проезд/перелет включен",
        "питание включено",
        "проживание в одном месте"
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
