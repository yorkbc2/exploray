<template>
  <div class="single">
    <div class="single__place">
      <i class="fa fa-map-marker"/> Камчатская долина, Россия
    </div>
    <full-window-slider></full-window-slider>
    <div class="block-line intro-slider-line">
      <div class="container">
        <div class="row intro-slider-line__row">
          <div class="col-md-5"></div>
          <div class="col-md-7 block-line__row">
            <div class="intro-slider-line__links">
              <div>
                <img src="/images/video.png" height="18px">&nbsp;&nbsp;
                <a href="#">Посмотреть видео</a>
              </div>
              <div>
                <img src="/images/pictures.png" height="18px">&nbsp;&nbsp;
                <a href="#">Посмотреть фото</a>
              </div>
            </div>
            <div>
              <advanced-select
                :mobileReversed="true"
                :options="[
                {
                  value: '23.04.19 - 30.04.19',
                  description: '(Осталось 5 мест)'
                },
                {
                  value: '23.04.19 - 30.04.19',
                  description: '(Осталось 5 мест)'
                },
                {
                  value: '23.04.19 - 30.04.19',
                  description: '(Осталось 5 мест)'
                }
              ]"
                placeholder="Даты и цены"
              />
            </div>
            <div>
              <a href="#" class="button button--outlined button-white button--wide">Вопросы</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row intro-subtext__row">
        <div class="col-md-5"></div>
        <div class="col-md-7">
          <div class="single-subtitle">
            <h3>Exploray</h3>
            <p>Узнайте больше подробнoстей о туре на Камчатку без рюкзаков</p>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <h2 class="section__title section__title--left section__title--lighter">Описание тура</h2>
        <div class="row about-row splitted-bottom">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <ul class="check-list">
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <ul class="check-list">
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
            </ul>
          </div>
        </div>
        <div class="row about-row splitted-bottom">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <h2
              class="section__title section__title--left section__title--lighter"
            >Что включает тур?</h2>
            <ul class="check-list">
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <h2 class="section__title section__title--left section__title--lighter">
              Что
              <span>НЕ</span> включает тур?
            </h2>
            <ul class="check-list check-list--red">
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
              <li>
                Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                в палатках. Обещанный тур без рюкзаков и прочих вещей,
                которые отвлекают.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Программа тура по дням</h2>
        <div class="row program-row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90362.91521378355!2d34.03917345542132!3d44.94689809437293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eadddedf991cc5%3A0x9c29422fbc780b40!2sSimferopol!5e0!3m2!1sen!2sua!4v1556966565652!5m2!1sen!2sua"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
            <advanced-tabs/>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Организаторы</h2>
        <offset-block :reversed="true" header="Организатор тура" image="/images/tour_org.jpg">
          <p>Официальный туроператор, работает с 2006 года. За это время мы провели тысячи сделок и подписали сотни контрактов на постоянное сотрудничество.</p>
          <div>
            <h4 class="mobile-hide">Рейтинг организатора</h4>
            <div class="row">
              <div class="col-md-8">
                <p class="mobile-hide">Рейтинг организатора расчитан на основании отзывов.</p>
                <p>
                  <a href="#">Читать отзывы</a>
                </p>
              </div>
              <div class="col-md-4 text-center">
                <app-stars :stars="4"/>
                <strong class="big-text">4/5</strong>
              </div>
            </div>
          </div>
        </offset-block>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Фото и видео с места тура</h2>
        <toggler :items="['Фото', 'Видео']">
          <div class="toggler-item">
            <app-default-slider class="photo-slider" :perPage="[[320, 2], [1024, 4]]">
              <slide v-for="(item, index) in photos" :key="index">
                <div class="photo-slider__card">
                  <img :src="item.image" alt>
                  <div class="photo-slider__card-mask">
                    <a :href="item.url" class="button button-white button--outlined">
                      <icon name="zoom-out" hoverFill="#000"/>Просмотреть фото
                    </a>
                  </div>
                </div>
              </slide>
            </app-default-slider>
          </div>
          <div class="toggler-item">
            <app-default-slider class="photo-slider" :perPage="[[320, 2], [1024, 4]]">
              <slide v-for="(item, index) in videos" :key="index">
                <div class="photo-slider__card">
                  <img :src="item.image" alt>
                  <div class="photo-slider__card-mask">
                    <a :href="item.url" class="button button-white button--outlined">
                      <icon name="zoom-out" hoverFill="#000"/>Просмотреть видео
                    </a>
                  </div>
                </div>
              </slide>
            </app-default-slider>
          </div>
        </toggler>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Как добраться</h2>
        <offset-block header="Туда - обратно" image="/images/tour_way.jpg">
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
        </offset-block>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Снаряжение</h2>
        <offset-block
          header="Предоставляется снаряжение"
          image="/images/tour_payment.jpg"
          :reversed="true"
        >
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
          <div class="d-flex">
            <strong class="flex justify-content-center d-flex flex-column">Что взять с собой:</strong>
            <div>
              <a href="#" class="button button-green">Личное снаряжение</a>
            </div>
          </div>
        </offset-block>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Безопасность</h2>
        <offset-block header="Следим за безопасностью" image="/images/tour_safety.jpg">
          <p>
            Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.
            <br>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс.
          </p>
        </offset-block>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Вопросы и ответы</h2>
        <div class="row qa-row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="1"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="2"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
          </div>
        </div>
        <div class="row qa-row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="3"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="4"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Отзывы наших клиентов</h2>
        <app-default-slider :perPage="[[320, 1], [1024, 3]]">
          <slide v-for="(item, index) in reviews" :key="index">
            <review-card
              :image="item.image"
              :name="item.name"
              :content="item.content"
              :tourName="item.tourName"
            />
          </slide>
        </app-default-slider>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Условия оплаты</h2>
        <offset-block
          header="Условия оплаты тура"
          image="/images/tour_payment.jpg"
          :reversed="true"
        >
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
          <p>Мы предлагаем выгодные условия оплаты услуг.</p>
        </offset-block>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Интересные предложения</h2>
        <app-default-slider :perPage="[[320, 1], [480, 2], [1024, 4]]">
          <slide v-for="item in $store.getters.data" :key="item._id">
            <product-card :data="item"/>
          </slide>
        </app-default-slider>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard.vue";
import TogglerVue from "../components/Blocks/Toggler.vue";
import FullWindowSliderVue from "../components/Sliders/FullWindowSlider.vue";
import ReviewCardVue from "../components/Blocks/ReviewCard.vue";
import AdvancedTabsVue from "../components/Blocks/AdvancedTabs.vue";
export default {
  name: "single-page",
  components: {
    "product-card": ProductCard,
    toggler: TogglerVue,
    "full-window-slider": FullWindowSliderVue,
    "review-card": ReviewCardVue,
    "advanced-tabs": AdvancedTabsVue
  },
  data() {
    return {
      data: null,
      photos: [
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        },
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        },
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        },
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        },
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        }
      ],
      videos: [
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        }
      ],
      reviews: [
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        },
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        },
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        },
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        }
      ]
    };
  },
  methods: {
    getData(_id) {
      this.data = this.$store.getters.data.filter(i => i._id === _id)[0];
    }
  },
  mounted() {
    const _id = this.$route.params.id;
    this.getData(_id);
  }
};
</script>

<style lang="scss">
.single {
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 66px;
  }

  &__place {
    position: absolute;
    width: 100%;
    height: auto;
    padding: 8px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 200;
    i {
      display: inline-block;
      font-size: 20px;
      margin-right: 10px;
    }
  }
}

.intro-slider-line {
  &__links {
    a {
      display: inline-block;
    }
    > div {
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }

  .button,
  .advanced-select {
    @media screen and (max-width: 768px) {
      align-self: center;
      min-width: 200px;
    }
  }
}

.single-subtitle {
  position: relative;
  padding: 37px 0 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 800;
    color: #cacaca;
    font-size: 36px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  p {
    padding: 0;
    margin: 15px 0;

    color: #646464;
    font-weight: 600;
  }

  &::after {
    content: "";
    position: absolute;
    width: 48px;
    height: 1px;
    background-color: #000;
    left: 0;
    bottom: 0;
  }
}

.row.intro-subtext__row {
  @media screen and (max-width: 768px) {
    .col-md-7 {
    margin-left: auto;
    max-width: 50%;

    .single-subtitle {
      h3 {
        font-size: 24px;
      }
      p {
        font-weight: lighter;
      }

      &::after {
        display: none;
      }
    }
  }
  }
}

.photo-slider {
  margin-top: 50px;

  &__card {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }

    &-mask {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;

      padding: 0 25px;

      position: absolute;
      top: 0px;
      left: 0px;

      background-color: rgba(0, 0, 0, 0.7);

      text-align: center;

      opacity: 0;
      transition: opacity 0.3s ease-in-out;

      a.button {
        display: inline-flex;
        justify-content: center;
        padding: 12px 15px;

        .svg-inserted {
          display: inline-flex;
          justify-content: center;
          flex-direction: column;
          margin-right: 10px;
        }

        &:hover {
          .svg-inserted {
            svg {
              fill: #000 !important;
            }
          }
        }
      }
    }
    &:hover {
      .photo-slider__card-mask {
        opacity: 1;
      }
    }
  }
}

.qa-row,
.program-row,
.about-row {
  @media screen and (max-width: 768px) {
    flex-direction: column;

    &.program-row {
      flex-direction: column-reverse;

      iframe {
        height: 400px;
        margin-top: 50px;
      }
    }

    > div {
      width: 100%;
      max-width: 100%;
      flex: none;
    }
  }
}
.mobile-hide {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
