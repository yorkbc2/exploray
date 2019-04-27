<template>
  <div class="date-picker-wrapper">
      <date-picker lang="ru" :not-before="new Date()" @change="data => onChange('from', data)" :placeholder="formatDate(from, 'C')" :width="150" />
      <date-picker lang="ru" :not-before="from || new Date()" @change="data => onChange('to', data)" :placeholder="formatDate(to, 'По')" :width="150" />
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
export default {
  name: "input-date-picker",
  components: {
    DatePicker
  },
  data: () => ({
      from: null,
      to: null
  }),
  methods: {
    onChange(type, data) {
        if (type === 'from') this.from = data;
        else this.to = data;
    },
    formatDate(date, prefix = '') {
        if (!date) return this.formatDate(new Date(), prefix);
        const month = date.getMonth() + 1,
            day = date.getDate();
        
        return `${prefix} ${day < 10 ? '0'+day : day}.${month < 10 ? '0'+month : month}.${date.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss">
    .date-picker-wrapper {
        display: flex;
        flex-direction: row; 

        .mx-input-append {
            display: none;
        }

        .mx-input {
            height: auto;
            color: #aeaeae;
            font-size: 14px;
            &::placeholder {
                color: #aeaeae;
            }
        }

        .mx-datepicker-popup {
            box-shadow: none;
            border: 0;

            .mx-calendar {
                .mx-calendar-header {
                    border-bottom: 1px solid #ebebeb;
                    .mx-icon-last-year,
                    .mx-icon-next-year {
                        display: none;
                    }
                }
                .mx-calendar-content {
                    width: 160px;
                    height: auto;
                    table {
                        thead,
                        tbody {
                            tr {
                                th,
                                td {
                                    width: 15px;
                                    color: #000;
                                    font-weight: 600;

                                    &.actived {
                                        background-color: #ebebeb;
                                    }
                                    &:hover {
                                        background-color: #ebebeb;
                                    }

                                    &.next-month {
                                        display: none;
                                    }

                                    &.disabled,
                                    &.last-month {
                                        background-color: #fff;
                                        color: #aeaeae;
                                    }
                                }

                                th {
                                    color: #da9603;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
