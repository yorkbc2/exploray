<template>
<!--  -->
  <a href="#">
    <article :class="{'card': true, 'card--stroke': strokeView, 'card--fixed-width': fixedWidth}">
      <div class="card__head" :style="{backgroundImage: `url(${data.image})`}">
        <a :href="data.place.url" target="_blank" class="card__place">
          <i class="fa fa-map-marker"></i>
          <span>{{ data.place.label }}</span>
        </a>
        <div class="card__head-overlay">
          <a href="#" class="card__head-link">Смотреть больше</a>
        </div>
      </div>
      <div class="card__body">
        <h2 class="card__title">{{ data.title | cut(36) }}</h2>
        <p
          class="card__description"
          v-if="strokeView && !isMobile"
        >{{ data.description | cut(124) }}</p>
        <div class="card__info">
          <div class="card__date-wrapper">
            <div class="card__date">
              <div class="row">
                <div class="col-md-5 col-sm-5 col-xs-5 card__date-days">
                  <i class="fa fa-calendar"></i>
                  &nbsp; {{getDays}} {{getDaysLable}}
                </div>
                <div class="col-md-7 col-sm-7 col-xs-7 text-right">{{dateRange}}</div>
              </div>
            </div>
            <div class="card__price">
              <div
                class="card__price-sale"
                v-if="data.price.sale"
              >{{ formattedPrice(data.price.sale) }} руб.</div>
              <div class="card__price-regular">{{ formattedPrice(40000) }} руб.</div>
            </div>
          </div>
          <div class="card__actions">
            <button
              v-if="!strokeView || isMobile"
              :class="{'card__compare': true, 'added': added}"
              @click="addToCart($event, data)"
            >
              <icon name="libra" :fill="added ? '#fff' : '#a5a5a5'"/>
            </button>
            <button
              v-else
              class="card__compare-stroke button button--green button--outlined"
              @click="addToCart($event, data)"
            >
              <i class="fa fa-check" v-if="added"></i> В сравнение
            </button>
            <button class="card__order button buton--green" @click="callPopup()">Заказать</button>
          </div>
        </div>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    data: Object,
    fixedWidth: Boolean,
    strokeView: Boolean
  },
  data() {
    return {
      isMobile: window.innerWidth < 768,
      added: this.data.added
    };
  },
  computed: {
    getDays() {
      return this.getDifferenceBetween(
        this.data.duration.from,
        this.data.duration.to
      );
    },
    getDaysLable() {
      let days = this.getDifferenceBetween(
        this.data.duration.from,
        this.data.duration.to
      );
      if (days === 1) return "день";
      else if (days > 1 && days < 5) return "дня";
      else return "дней";
    },
    dateRange() {
      const { from, to } = this.data.duration;
      return `С ${from.getDate() + 1}.${this.formatMonth(
        from.getMonth() + 1
      )} - ${to.getDate() + 1}.${this.formatMonth(to.getMonth() + 1)}`;
    }
  },
  methods: {
    callPopup() {
      this.$store.commit("OPEN_POPUP", this.data);
    },
    getDifferenceBetween(dateA, dateB) {
      return (
        Math.abs(dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24)
      );
    },
    formattedPrice(price) {
      price += "";
      if (price.length <= 3) return price;
      let parts = parseInt(price.length / 3),
        start = price.length % 3,
        rest = price.slice(start);

      return price.slice(0, start) + " " + rest;
    },
    formatMonth(month) {
      return month < 10 ? `0${month}` : month;
    },
    addToCart(e, item) {
      // 
      e.stopPropagation();
      e.preventDefault();
      
      this.$store.commit("ADD_TO_CART", item._id);
      this.added = !this.added;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flex($dir: row, $jc: space-between) {
  display: flex;
  flex-direction: $dir;
  justify-content: $jc;
}
a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #000;
  }
}
.card {
  max-width: 270px;
  margin: 0 auto;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 2.5px 2.33px 10px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
  overflow: hidden;
  transition: box-shadow 0.4s ease-in-out;

  min-height: 380px;

  &:hover {
    box-shadow: 2.5px 2.33px 17px 0px rgba(0, 0, 0, 0.35);
  }

  &__title {
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 15px;
  }

  &__description {
    color: #727272;
    font-size: 14px;
    margin-bottom: 1rem;
  }

  &__body {
    padding: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 15px;
      width: 30px;
      height: 3px;
      background-color: #0dba00;
    }
  }

  &__date {
    color: #999999;
    margin-bottom: 10px;
    font-size: 14px;
    &-days {
      position: relative;
      padding-right: 0px;
      &::before {
        content: "";
        position: absolute;
        display: block;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #0dba00;
        border-radius: 50px;
      }
    }
    @media screen and (max-width: 767px) {
      > .row {
        display: flex;
        flex-direction: row;

        > div {
          flex: 1;
          &:first-child {
            max-width: 40%;
          }
        }
      }
    }
  }

  &__price {
    @include flex();

    &-regular {
      font-size: 22px;
      font-weight: bolder;
    }

    &-sale {
      font-size: 16px;
      text-decoration: line-through;
      color: #999999;
      align-self: center;
      padding-top: 6px;
    }
  }

  &__head {
    position: relative;
    border-radius: 10px 10px 0 0;
    height: 170px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1;
      top: 0px;
      left: 0px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px 10px 0 0;

      > a {
        color: #fff;
        display: inline-block;
        text-decoration: none;
        font-weight: lighter;
        font-size: 14px;
        padding: 7px 15px;
        border: 1px solid #fff;
        text-align: center;
        border-radius: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 160px;
        transform: translateX(-50%) translateY(-50%);
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
    &:hover {
      .card__head-overlay {
        opacity: 1;
      }
    }
  }

  &__rating {
    position: absolute;
    padding: 2px 4px;
    background-color: #fff;
    top: 15px;
    right: 0px;
    z-index: 2;
    border-radius: 3px 0 0 3px;
    i {
      margin-right: 5px;
      color: #e7da0f;
      font-size: 18px;
    }
  }

  &__place {
    position: absolute;
    bottom: 0;
    left: 0;

    text-decoration: none;
    color: #fff;
    z-index: 2;
    font-weight: lighter;
    width: 100%;
    padding: 7px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    i {
      margin-right: 7px;
      font-size: 18px;
    }
    &:hover {
      color: #fff;
    }
  }

  &__actions {
    @include flex(row, space-between);
    margin-top: 20px;

    > button {
      flex: 1;
      max-height: 50px;

      &.card__compare {
        flex: none;
        @include flex(column, center);
        width: 34px;
        height: 34px;
        padding: 0px;
        margin-right: 20px;
        border-radius: 10px;
        background-color: #ffffff;
        border: 1px solid #ebebeb;
        outline: none;

        position: relative;
        cursor: pointer;

        &.added {
          border-color: #0dba00;
          background-color: #0dba00;

          svg {
            fill: #fff !important;
          }
        }

        > div {
          @include flex(column, center);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }
  }

  &--stroke {
    @media screen and (min-width: 768px) {
      max-width: 100%;
      min-height: 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card__body {
        padding: 25px 15px 25px 25px;

        &::before {
          top: 0px;
          left: 25px;
        }
      }

      .card__info {
        @include flex();

        .card__date-wrapper {
          flex: 1;
          margin-right: 30px;
          padding: 7px 0;
          @include flex(column, space-between);

          .card__price {
            margin-top: 10px;

            .card__price-sale {
              padding-bottom: 3px;
            }
          }
        }

        .card__actions {
          margin-top: 0px;
          max-width: 185px;
          width: 185px;
          @include flex(column, space-between);

          > button {
            padding: 7px 30px;
            &:first-child {
              margin-bottom: 10px;
            }
          }
        }
      }

      .card__head {
        max-width: 310px;
        min-height: 170px;
        height: auto;
        width: 310px;
        flex: none;
        position: relative;
        border-radius: 10px 0px 0px 10px;
        > img.card__image {
          height: 100%;
          border-radius: 10px 0 0 10px;
        }
        .card__head-overlay {
          border-radius: 10px 0 0 10px;
        }
        .card__place {
          padding: 10px 15px;
        }
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      .card__head {
        max-width: 250px;
        width: 250px;
      }
    }
  }
}
</style>
