<template>
  <div class="single">
    <full-window-slider></full-window-slider>
    <div class="block-line intro-slider-line">
      <div class="container">
        <div class="row">
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
              <custom-select :values="[
                'foobar'
              ]"/>
            </div>
            <div>
              <a href="#" class="button button--outlined button-white button--wide">Вопросы</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
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
        <div class="row">
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
        <div class="row">
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
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Организаторы</h2>
        <offset-block :reversed="true" header="Организатор тура" image="/images/tour_org.jpg">
          <p>Официальный туроператор, работает с 2006 года. За это время мы провели тысячи сделок и подписали сотни контрактов на постоянное сотрудничество.</p>
          <div>
            <h4>Рейтинг организатора</h4>
            <div class="row">
              <div class="col-md-8">
                <p>Рейтинг организатора расчитан на основании отзывов.</p>
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
            <app-default-slider></app-default-slider>
          </div>
          <div class="toggler-item">VIdeo</div>
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
        <offset-block header="Туда - обратно" image="/images/tour_way.jpg" :reversed="true">
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
        <div class="row">
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
        <div class="row">
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
        <h2 class="section__title">Условия оплаты</h2>
        <offset-block
          header="Следим за безопасностью"
          image="/images/tour_payment.jpg"
          :reversed="true"
        >
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
        </offset-block>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Интересные предложения</h2>
        <app-default-slider :perPage="[[480, 1],[1024, 4]]">
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
export default {
  name: "single-page",
  components: {
    "product-card": ProductCard,
    toggler: TogglerVue,
    "full-window-slider": FullWindowSliderVue
  },
  data() {
    return {
      data: null
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
}

.single-subtitle {
  position: relative;
  padding: 37px 0 20px;

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
</style>
