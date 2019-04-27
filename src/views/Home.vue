<template>
  <div class="home">
    <app-intro
      :backgroundImages="['/images/slider.jpg']"
      :headers="['Мир интереснее , чем кажется!']"
    />
    <app-intro-inline-slider/>
    <section class="section tour-section">
      <div class="container">
        <h2 class="section__title">Ближайшие туры</h2>
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <covered-block
              header="Горная владь"
              content="от 10 00 руб."
              :fixedHeight="400"
              :isButton="true"
              url="#"
              background="images/tour_1.jpg"
              :showCursor="true"
            />
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 d-flex flex-column">
            <div class="row flex">
              <div class="col-md-6 d-flex flex-column">
                <covered-block
                  header="К звездам!"
                  content="от 8 000 руб."
                  url="#"
                  background="images/tour_2.jpg"
                />
              </div>
              <div class="col-md-6 d-flex flex-column">
                <covered-block
                  header="Восхождение"
                  content="от 20 00 руб."
                  url="#"
                  background="images/tour_3.jpg"
                />
              </div>
            </div>
            <div class="row flex">
              <div class="col-md-12 d-flex flex-column">
                <covered-block
                  header="Туры по фестивалямм"
                  content="от 8 000 руб."
                  url="#"
                  background="images/tour_4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <covered-block
              header="Горная владь"
              content="от 10 00 руб."
              :fixedHeight="400"
              :isButton="true"
              url="#"
              background="images/tour_1.jpg"
              :showCursor="true"
            />
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 d-flex flex-column">
            <div class="row flex">
              <div class="col-md-6 d-flex flex-column">
                <covered-block
                  header="К звездам!"
                  content="от 8 000 руб."
                  url="#"
                  background="images/tour_2.jpg"
                />
              </div>
              <div class="col-md-6 d-flex flex-column">
                <covered-block
                  header="Восхождение"
                  content="от 20 00 руб."
                  url="#"
                  background="images/tour_3.jpg"
                />
              </div>
            </div>
            <div class="row flex">
              <div class="col-md-12 d-flex flex-column">
                <covered-block
                  header="Туры по фестивалямм"
                  content="от 8 000 руб."
                  url="#"
                  background="images/tour_4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Регионы</h2>
        <app-region-slider/>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">О проекте</h2>

        <div class="block-with-image">
          <div class="block-with-image__img">
            <img src="/images/about.jpg" alt>
          </div>
          <div class="block-with-image__content">
            <h3 class="section__title section__title--left section__title--uppercased">Exploray</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi placeat numquam molestiae deserunt ducimus iste commodi nobis quaerat tenetur qui nesciunt doloribus sunt, ad ullam? Reiciendis sit repellat vero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi placeat numquam molestiae deserunt ducimus iste commodi nobis quaerat tenetur qui nesciunt doloribus sunt, ad ullam? Reiciendis sit repellat vero.</p>
          </div>
        </div>
      </div>
    </section>
    <app-subscribe></app-subscribe>
  </div>
</template>

<script>
import Subscribe from "@/components/Subscribe/Subscribe.vue";
import CoveredBlock from "@/components/Blocks/CoveredBlock.vue";
import RegionSlider from "@/components/Sliders/RegionSlider.vue";
import IntroInlineSlider from "@/components/Sliders/IntroInlineSlider.vue";
import IntroSlider from "@/components/Sliders/IntroSlider.vue";
export default {
  components: {
    "app-subscribe": Subscribe,
    "app-region-slider": RegionSlider,
    "app-intro-inline-slider": IntroInlineSlider,
    "covered-block": CoveredBlock,
    "app-intro": IntroSlider
  }
};
</script>

<style lang="scss" scoped>
.block-with-image {
  margin-top: 40px;
  display: flex;
  position: relative;
  &__img {
    max-width: 800px;
    img {
      width: 100%;
    }
  }

  &__content {
    position: absolute;
    width: 500px;
    padding: 25px 100px 25px 25px;
    box-shadow: 2.5px 4.33px 18px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    right: 0px;
    max-width: 100%;
    top: 50%;
    transform: translateY(-50%);

    &::after {
      content: "EXPLORAY";
      display: block;
      position: absolute;
      top: -22px;
      right: 1px;
      font-weight: bolder;
      font-size: 58px;
      color: #efefef;
    }
  }
}
.tour-section {
  div[class*="col-md-"] {
    padding: 0 10px;
  }
}
</style>
