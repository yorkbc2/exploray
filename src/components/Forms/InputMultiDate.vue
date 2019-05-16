<template>
  <div :class="{'input-multi-date input-container': true, 'input-multi-date--inline': inline}">
    <label v-if="label" class="input-label">{{label}}</label>
    <div class="default-advanced-select d-flex">
      <advanced-select
        v-if="!hideDays"
        placeholder="День"
        :options="computedData(day)"
        class="days-select"
      />
      <advanced-select
        placeholder="Месяц"
        :options="months.map(m => ({value: m}))"
        class="months-select"
      />
      <advanced-select placeholder="Год" :options="computedData(year, true)" class="years-select"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    hideDays: Boolean,
    inline: Boolean
  },
  data() {
    return {
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      year: {
        min: 1941,
        max: new Date().getFullYear()
      },
      day: {
        min: 1,
        max: 31
      }
    };
  },
  methods: {
    computedData(obj, reversed = false) {
      const data = [];
      if (!reversed) {
        for (let i = obj.min; i <= obj.max; i++) {
          data.push({
            value: i
          });
        }
      } else {
        for (let i = obj.max; i >= obj.min; i--) {
          data.push({
            value: i
          });
        }
      }
      return data;
    }
  }
};
</script>

<style lang="scss">
.input-multi-date {
  max-width: 100% !important;

  .advanced-select {
    max-width: 130px;

    margin-right: 10px;
  }
  &--inline {
    display: flex;
    flex-direction: row;

    > label.input-label {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      min-width: 160px;
      margin-right: 20px;
      @media screen and (max-width: 1024px) {
        padding-left: 0px;
        margin-right: 0px;
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;

      > label.input-label {
        padding-left: 30px;
      }

      .default-advanced-select {
        justify-content: center;
      }
    }
  }

  .default-advanced-select {
    @media screen and (max-width: 767px) {
      > div.advanced-select {
        &.days-select {
          max-width: 90px;
        }
        &.months-select {
          flex: 1;
          max-width: 100%;
        }
        &.years-select {
          max-width: 90px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
