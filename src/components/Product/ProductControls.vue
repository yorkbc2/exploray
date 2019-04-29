<template>
  <div class="product-controls-wrapper">
    <div class="product-controls d-flex justify-content-between">
      <div class="product-controls__sort d-flex">
        <strong class="d-flex flex-column justify-content-center">Сортировать по:</strong>
        <custom-select
          label="Цене"
          :values="[
            'По возрастанию',
            'По убыванию',
          ]"
        />
        <custom-select
          label="Рейтинг"
          :values="[
            'По возрастанию',
            'По убыванию',
          ]"
        />
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
    <div class="product-controls-active-filters">
      <span class="product-controls-active-filters__item">
        Проживание группой
        <i>&times;</i>
      </span>

      <span class="product-controls-active-filters__item">
        От 5000 - 18 000 руб.
        <i>&times;</i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle(enable) {
      this.$store.commit(enable ? "ENABLE_STROKE_VIEW" : "DISABLE_STROKE_VIEW");
    }
  }
};
</script>

<style lang="scss">
.product-controls__sort {
  > strong {
    margin-right: 15px;
  }
}

.product-controls {
  &__actions {
    button {
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
      }
      &:hover,
      &.active {
        background-color: #e1e1e1;
      }
      width: 30px;
      height: 30px;
      padding: 0px;
      border-radius: 2px;
      border: 1px solid #e1e1e1;
      background: transparent;
      transform: scale(1.1);
    }
  }
}
.select-wrapper {
  margin-right: 15px;
}
.product-controls-active-filters {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 20px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 2.5px 1.33px 5px 0px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 30px;
  &__item {
    position: relative;
    margin-right: 10px;
    display: inline-block;
    padding: 6px 25px 6px 15px;
    border: 1px solid #0dba00;
    border-radius: 50px;
    font-size: 12px;
    i {
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