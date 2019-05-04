<template>
  <div class="full-window-slider">
    <carousel :perPage="1" :navigationEnabled="true">
      <slot name="content"/>
      <slide
        class="full-window-slider__slide"
        style="background-image: url('/images/tour_bg.jpg');"
      >
        <div class="full-window-slider__slide-content">
          <div class="container">
            <h2 class="slide__title">Камчатский хит: тур без рюкзаков</h2>
            <div class="row">
              <div class="col-md-4 col-sm-12 col-xs-12">
                <span class="slide__iconed-text">
                  <img src="/images/vulcano.png"> 5 вулканов
                </span>
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
                <span class="slide__iconed-text">
                  <img src="/images/springs.png"> 3 гейзера
                </span>
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
                <span class="slide__iconed-text">
                  <img src="/images/bear.png"> Медведи
                </span>
              </div>
            </div>
            <p
              class="slide__description"
            >Живописная природа, горные хребты и море незабываемых впечатлений.</p>
            <a href="#" class="button button-green button--large">Заказать</a>
          </div>
        </div>
      </slide>
      <slide
        class="full-window-slider__slide"
        style="background-image: url('/images/tour_bg.jpg');"
      >
        <div class="full-window-slider__slide-content">
          <div class="container">
            <h2 class="slide__title">Камчатский хит: тур без рюкзаков</h2>
            <div class="row">
              <div class="col-md-4 col-sm-12 col-xs-12">
                <span class="slide__iconed-text">
                  <img src="/images/vulcano.png"> 5 вулканов
                </span>
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
                <span class="slide__iconed-text">
                  <img src="/images/springs.png"> 3 гейзера
                </span>
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
                <span class="slide__iconed-text">
                  <img src="/images/bear.png"> Медведи
                </span>
              </div>
            </div>
            <p
              class="slide__description"
            >Живописная природа, горные хребты и море незабываемых впечатлений.</p>
            <a href="#" class="button button-green button--large">Заказать</a>
          </div>
        </div>
      </slide>
    </carousel>
    <div class="container">
      <div class="full-window-slider__card">
        <div class="full-window-slider__card-breads">
          <breadcrumbs
            :path="{
                '/': 'Главная',
                '/tours': 'Путешествия',
                '/tour/1': 'Камчатка'
            }"
          />
        </div>
        <div class="full-window-slider__card-body">
          <slot name="card"/>
          <div class="full-window-slider-card__row">
            <div class="left">
              Размер группы
              <br>
              <small>Осталось 12 мест из 15</small>
            </div>
            <div class="right">
              <strong>4 - 20 человек</strong>
            </div>
          </div>

          <div class="full-window-slider-card__row">
            <div class="left">Расстояние</div>
            <div class="right">
              <strong>50 километров</strong>
            </div>
          </div>

          <div class="full-window-slider-card__row">
            <div class="left">Тип активности</div>
            <div class="right">
              <strong>Поход, сплав</strong>
            </div>
          </div>

          <div class="full-window-slider-card__row">
            <div class="left">
              Сложность
              <br>
              <small>Новичкам, тур без рюкзаков</small>
            </div>
            <div class="right">
              <app-stars :stars="3"/>
            </div>
          </div>

          <div class="full-window-slider-card__row">
            <div class="left">Проживание</div>
            <div class="right">
              <strong>4 - 20 человек</strong>
            </div>
          </div>

          <div class="full-window-slider-card__row">
            <div class="left">
              Рейтинг
              <br>
              <small>
                На основании
                <a href="#">отзывов</a>
              </small>
            </div>
            <div class="right">
              <app-stars :stars="3"/>
              <div class="text-center">
                <strong>3/5</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="full-window-slider__card-footer">
          <div class="full-window-slider__card-footer__content">
            <slot name="card-footer"/>
            <div class="full-window-slider-card__row">
              <div class="left">
                <h5>50 000 руб.</h5>
              </div>
              <div class="right">
                <div class="default-badge">7 дней</div>
              </div>
            </div>
            <p>
              <small>Стоимость указана за одного человека. Для детей до 14 лет, действует скидка 14%.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBreadsVue from "../Header/HeaderBreads.vue";
export default {
  name: "full-window-slider",
  components: {
    breadcrumbs: HeaderBreadsVue
  }
};
</script>

<style lang="scss">
.full-window-slider {
  min-height: 640px;

  &__slide {
    position: relative;
    min-height: 680px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      text-align: center;
      z-index: 15;

      color: #fff;

      @media screen and (max-width: 768px) {
        width: 600px;
      }

      .slide__iconed-text {
        font-size: 20px;
        vertical-align: middle;
        img {
          height: 35px;
          width: auto;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
      }

      .slide__title {
        font-size: 36px;
        font-weight: bolder;
        margin-bottom: 40px;
      }

      .slide__description {
        font-size: 16px;
        max-width: 400px;
        margin: 20px auto 50px;
      }
    }
  }

  .container {
    position: relative;
  }

  &__card {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    max-width: 450px;
    transform: translateY(50%);
    z-index: 113;

    @media screen and (max-width: 768px) {
      max-width: 50%;
      transform: translateY(80%);
    }

    &-breads {
      padding: 4px 0;
      a {
        font-weight: lighter;
        font-size: 14px;

        &::after {
          margin-left: 8px !important;
          margin-right: 8px !important;
        }
      }
    }

    &-body {
      background: #fff;
      padding: 20px 25px 15px;
      box-shadow: 2.5px -10px 7px 0px rgba(0, 0, 0, 0.2);
      > ul {
      }
    }

    &-footer {
      background: #fff;
      padding: 0px 25px;
      box-shadow: 2.5px 6.23px 7px 0px rgba(0, 0, 0, 0.2);
      &__content {
        padding: 15px 0 20px;
        border-top: 1px solid #e7e7e7;
      }
      p {
        line-height: 100%;
        font-weight: 300;
        small {
          font-size: 12px;
        }
      }
    }
  }
  &-card__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;

    h5 {
      font-weight: bold;
      font-size: 27px;
      margin-bottom: 0px;
    }

    .left {
      font-size: 16px;
    }

    .right {
      strong {
        font-size: 18px;
      }
    }
  }

  .VueCarousel {
    &-dot {
      transform: scale(1.1)!important;
      outline: none;
      &--active {
        background-color: #0dba00 !important;
      }
    }
    &-navigation {
      &-prev {
        left: 12%!important;
      }
      &-next {
        right: 16%!important;
      }
      @media screen and (max-width: 768px) {
        &-prev {
          left: 5%!important;
        }
        &-next {
          right: 9%!important;
        }
      }
    }
    &-pagination {
      position: absolute!important;
      z-index: 113!important;
      bottom: 30px!important;
      right: 13%!important;
      width: auto!important;
    }
  }
}
</style>
