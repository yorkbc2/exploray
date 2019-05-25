<template>
  <div :class="{'product-filters': true, 'active': $store.getters.showFilters}">
    <h3>Фильтр</h3>
    <product-controls class="product-filters__controls" :hideSort="true" v-if="isTablet" />
    <div class="tabs">
      <tab header="Цена, руб.">
        <input-price-range
          @change="onFiltersChanged(filters.PRICE, $event)"
          :range="priceRange[1]"
          :postfix="['руб.', 'руб.']"
          :interval="1"
        />
      </tab>

      <tab header="Даты">
        <div class="default-date-pick">
          <input-date-picker @change="onFiltersChanged(filters.DATE, $event)" ref="datePicker"/>
        </div>
      </tab>

      <tab header="Длительность, дней">
        <input-price-range
          @change="onFiltersChanged(filters.DURATION, $event)"
          :range="durationRange[1]"
          :postfix="['дней', 'дней']"
        />
      </tab>

      <tab header="Число путешественников">
        <input-price-range
          @change="onFiltersChanged(filters.TRAVELERS, $event)"
          :range="travelersRange[1]"
        />
      </tab>

      <tab header="Сложность">
        <checkbox
          v-for="(item, index) in difficulty"
          @change="onFiltersChanged(filters.DIFFICULTY, $event)"
          :key="index"
          :label="item"
          :reversed="true"
        />
      </tab>

      <tab header="Рейтинг">
        <checkbox :reversed="true" value="1" @change="onFiltersChanged(filters.STARS, 1)">
          <app-stars :stars="1"/>
        </checkbox>
        <checkbox :reversed="true" value="2" @change="onFiltersChanged(filters.STARS, 2)">
          <app-stars :stars="2"/>
        </checkbox>
        <checkbox :reversed="true" value="3" @change="onFiltersChanged(filters.STARS, 3)">
          <app-stars :stars="3"/>
        </checkbox>
        <checkbox :reversed="true" value="4" @change="onFiltersChanged(filters.STARS, 4)">
          <app-stars :stars="4"/>
        </checkbox>
        <checkbox :reversed="true" value="5" @change="onFiltersChanged(filters.STARS, 5)">
          <app-stars :stars="5"/>
        </checkbox>
      </tab>

      <tab header="Размер группы, чел">
        <input-price-range
          :range="travelersRange[1]"
          :postfix="['чел.','чел.']"
          @change="onFiltersChanged(filters.TRAVELERS, $event)"
        />
      </tab>

      <tab header="Дополнительно">
        <checkbox
          v-for="(item, index) in additional"
          :key="index"
          :label="item"
          :reversed="true"
          @change="onFiltersChanged(filters.ADDITIONALS, item)"
        />
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
    "app-stars": InputStarsVue,
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
      ],
      priceRange: [0, 20000],
      travelersRange: [0, 10],
      durationRange: [0, 10],
      filters: {
        PRICE: "price",
        STARS: "stars",
        DURATION: "duration",
        TRAVELERS: "travelers",
        ADDITIONALS: "additionals",
        DIFFICULTY: "difficulty",
        DATE: "date",
        SIZE_OF_GROUP: "size_of_group"
      }
    };
  },
  computed: {
    isTablet() {
      return window.innerWidth <= 1024;
    }
  },
  methods: {
    percentToValue(percent, maxValue) {
      return (maxValue / 100) * percent;
    },
    onFiltersChanged(filterType, value) {
      const request = {
        id: filterType,
        delete: true,
        value
      };

      switch (filterType) {
        case this.filters.SIZE_OF_GROUP:
          request.value = [
            this.percentToValue(value[0], this.travelersRange[1]),
            this.percentToValue(value[1], this.travelersRange[1])
          ];
          request.delete =
            request.value[0] === this.travelersRange[0] &&
            request.value[1] === this.travelersRange[1];
          request.prefix = "Размер группы: ";
          request.postfix = " чел.";
        case this.filters.PRICE:
          request.value = [
            this.percentToValue(value[0], this.priceRange[1]),
            this.percentToValue(value[1], this.priceRange[1])
          ];
          request.postfix = " руб.";
          request.prefix = "Цена: ";
          request.delete =
            request.value[0] === this.priceRange[0] &&
            request.value[1] === this.priceRange[1];
          break;
        case this.filters.STARS:
        case this.filters.ADDITIONALS:
        case this.filters.DIFFICULTY:
          request.multiple = true;
          break;
        case this.filters.TRAVELERS:
          request.value = [
            this.percentToValue(value[0], this.travelersRange[1]),
            this.percentToValue(value[1], this.travelersRange[1])
          ];
          request.delete =
            request.value[0] === this.travelersRange[0] &&
            request.value[1] === this.travelersRange[1];
          request.prefix = "Путешественников: ";
          request.postfix = " чел.";
        case this.filters.DURATION:
          request.value = [
            this.percentToValue(value[0], this.durationRange[1]),
            this.percentToValue(value[1], this.durationRange[1])
          ];
          request.delete =
            request.value[0] === this.durationRange[0] &&
            request.value[1] === this.durationRange[1];
          request.prefix = "Длительность: ";
          request.postfix = " дней.";
          break;
        case this.filters.DATE:
          request.delete = false;
          request.value = [
            this.$refs.datePicker.formatDate(new Date(value.from), ""),
            this.$refs.datePicker.formatDate(new Date(value.to), "")
          ];
          break;
      }

      this.$store.commit("CHANGE_FILTERS", request);
    }
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

  &__controls {
    display: none;
  }

  @media screen and (max-width: 1024px) {
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
    &__controls {
      display: block;
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
