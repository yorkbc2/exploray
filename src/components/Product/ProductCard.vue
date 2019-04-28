<template>
  <article class="card">
    <div class="card__head">
      <img class="card__image" :src="''" alt :title="data.title">
      <span class="card__rating">
        <strong>4/5</strong>
      </span>
      <a href="#" class="card__place"></a>
      <div class="card__head-overlay">
        <a href="#" class="card__head-link">Смотреть больше</a>
      </div>
    </div>
    <div class="card__body">
      <h2 class="card__title">{{ data.title }}</h2>
      <p class="card__description" v-if="strokeView">{{ data.description }}</p>
      <div class="card__info">
        <div class="card__date-wrapper">
          <div class="card__date">
            <div class="row">
              <div class="col-md-6">{{getDays}} {{getDaysLable}}</div>
              <div class="col-md-6 text-right"></div>
            </div>
          </div>
          <div class="card__price">
            <div class="card__price-sale" v-if="data.price.sale">{{data.price.sale}}</div>
            <div class="card__price-regular">{{ data.price.regular }}</div>
          </div>
        </div>
        <div class="card__actions">
          <button v-if="!strokeView" class="card__compare">A</button>
          <button
            v-else
            class="card__compare-stroke button button--green button--outlined"
          >В сравнение</button>
          <button class="card__order button buton--green">Заказать</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    data: Object,
    strokeView: Boolean
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
    }
  },
  methods: {
    getDifferenceBetween(dateA, dateB) {
      return (
        Math.abs(dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24)
      );
    }
  },
  mounted() {}
};
</script>

