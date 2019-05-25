<template>
  <div class="date-picker-wrapper">
    <date-picker
      lang="ru"
      :not-before="new Date()"
      @change="data => onChange('from', data)"
      :placeholder="formatDate(from, 'C')"
      :width="150"
    />
    <date-picker
      lang="ru"
      :not-before="from || new Date()"
      @change="data => onChange('to', data)"
      :placeholder="formatDate(to, 'По')"
      :width="150"
    />
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
    from: new Date(),
    to: new Date()
  }),
  methods: {
    onChange(type, data) {
      if (type === "from") this.from = data;
      else this.to = data;

      this.$emit("change", {
        from: this.from,
        to: this.to
      });
    },
    formatDate(date, prefix = "") {
      if (!date) return this.formatDate(new Date(), prefix);
      const month = date.getMonth() + 1,
        day = date.getDate();

      return `${prefix} ${day < 10 ? "0" + day : day}.${
        month < 10 ? "0" + month : month
      }.${date.getFullYear()}`;
    }
  }
};
</script>

<style lang="scss">
.date-picker-wrapper {
  display: flex;
  flex-direction: row;

  .mx-datepicker {
    &:first-child {
      .mx-input {
        border-radius: 50px 0 0 50px;
        border-right: 0px;
      }
    }
    &:last-child {
      .mx-input {
        border-radius: 0 50px 50px 0;
        border-left: 0px;
      }
    }
    .mx-input-wrapper {
      &::after {
        content: "\F078";
        font-family: "Font Awesome 5 Free";
        position: absolute;
        color: #8e8e8e;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        right: 7px;
      }
    }
  }

  .mx-input-append {
    display: none;
  }

  .mx-input {
    height: auto;
    color: #aeaeae;
    font-size: 13px;
    background-color: #f6f6f6;
    border: 1px solid #ebebeb;
    padding: 10px 15px;
    box-shadow: none;
    cursor: pointer;
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
