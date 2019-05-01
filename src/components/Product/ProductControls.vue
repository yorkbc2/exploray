<template>
  <div class="product-controls-wrapper">
    <div class="product-controls d-flex justify-content-between">
      <div class="product-controls__sort d-flex">
        <strong class="d-flex flex-column justify-content-center">Сортировать по:</strong>
        <custom-select
          label="цене"
          :values="[
            'по возрастанию',
            'по убыванию',
          ]"
          placeholder="выбрать"
        />
        <custom-select
          label="рейтинг"
          :values="[
            'по возрастанию',
            'по убыванию',
          ]"
          placeholder="выбрать"
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
        5000 - 18 000 руб.
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
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 25px;
    padding: 0 15px;

    strong {
      display: block;
      margin-bottom: 15px;
    }

    label.select-wrapper {
      justify-content: space-between;
      margin-bottom: 10px;
      margin-right: 0px;
      select {
        min-width: 180px;
      }
    }
  }
}

.product-controls {
  &__actions {
    @media screen and (max-width: 480px) {
      display: none!important;
    }
    > div {
      display: flex;
    }
    button {
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-right: 2px;
      }
      &:hover,
      &.active {
        background-color: #e1e1e1;
      }
      width: 30px;
      height: 31px;
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
  @media screen and (max-width: 480px) {
    display: none;
  }
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