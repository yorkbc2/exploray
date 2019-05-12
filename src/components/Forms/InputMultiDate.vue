<template>
  <div :class="{'input-multi-date input-container': true, 'input-multi-date--inline': inline}">
    <label v-if="label" class="input-label">{{label}}</label>
    <div class="default-advanced-select d-flex">
      <advanced-select v-if="!hideDays" placeholder="День" :options="computedData(day)"/>
      <advanced-select placeholder="Месяц" :options="months.map(m => ({value: m}))"/>
      <advanced-select placeholder="Год" :options="computedData(year, true)"/>
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
        max-width: 100%!important;

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
            }
        }
    }
</style>
