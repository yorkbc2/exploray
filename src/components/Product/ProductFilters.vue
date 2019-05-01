<template>
  <div :class="{'product-filters': true, 'active': $store.getters.showFilters}">
    <h3>Фильтр</h3>
    <div class="tabs">
      <tab header="Цена, руб.">
        <input-price-range :range="20000" :postfix="['руб.', 'руб.']" :interval="1"/>
      </tab>

      <tab header="Даты">
        <div class="default-date-pick">
          <input-date-picker/>
        </div>
      </tab>

      <tab header="Длительность, дней">
        <input-price-range :range="10" :postfix="['дней', 'дней']"/>
      </tab>

      <tab header="Число путешественников">
        <input-price-range :range="10"/>
      </tab>

      <tab header="Сложность">
        <checkbox v-for="(item, index) in difficulty" :key="index" :label="item" :reversed="true"/>
      </tab>

      <tab header="Рейтинг">
        <checkbox :reversed="true" value="1">
          <app-stars :stars="1"/>
        </checkbox>
        <checkbox :reversed="true" value="2">
          <app-stars :stars="2"/>
        </checkbox>
        <checkbox :reversed="true" value="3">
          <app-stars :stars="3"/>
        </checkbox>
        <checkbox :reversed="true" value="4">
          <app-stars :stars="4"/>
        </checkbox>
        <checkbox :reversed="true" value="5">
          <app-stars :stars="5"/>
        </checkbox>
      </tab>

      <tab header="Размер группы, чел">
        <input-price-range :range="10" :postfix="['чел.','чел.']" />
      </tab>

      <tab header="Дополнительно">
        <checkbox v-for="(item, index) in additional" :key="index" :label="item" :reversed="true"/>
      </tab>
    </div>
    <button class="button button-green button-block">Применить фильтр</button>
  </div>
</template>

<script>
import Tab from "@/components/Blocks/Tab.vue";
import Checkbox from "@/components/Forms/Checkbox.vue";
import InputStarsVue from "../Forms/InputStars.vue";
export default {
  components: {
    checkbox: Checkbox,
    "app-stars": InputStarsVue
  },
  data() {
    return {
      rating: ["1 звезда", "2 звезды", "3 звезды", "4 звезды", "5 звезд"],
      difficulty: ["Для новичков", "Средне", "Сложно", "Экстрим"],
      additional: [
        "Необходима виза",
        "Проезд/перелет включен",
        "Питание включено",
        "Проживание в одном месте"
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

  .button.button-block {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    opacity: 0;
    top: -100%;
    width: 100%;
    z-index: 98;
    background-color: #fff;
    left: 0px;
    padding: 40px 80px;
    text-align: center;
    height: 100%;
    overflow-y: auto;
    transition: opacity 0.3s ease-in-out;
    .button.button-block {
      display: block;
    }
    &.active {
      top: 66px;
      opacity: 1;
    }
    h3 {
      margin-bottom: 25px;
    }
    .tabs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 25px;

      .tab {
        width: 45%;

        &:first-child,
        &:nth-child(2) {
          border-top: 1px solid #e7e7e7;
        }

        .date-picker-wrapper {
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    
    padding: 40px 25px;
    height: calc(100% - 62px);

    .tabs {
      flex-direction: column;
      .tab {
        width: 100%;

        > h3 {
          text-align: left;
        }
        
      }
    }

    &.active {
      top: 62px;
    }
  }
}
</style>
