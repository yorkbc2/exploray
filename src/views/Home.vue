<template>
  <div class="home">
    <app-intro
      :backgroundImages="['/images/slider.jpg', 'https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg']"
      :headers="['Мир интереснее , чем кажется!', 'Ещё один слайд для показа']"
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

        <offset-block header="Exploray" image="/images/about.jpg">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi placeat numquam molestiae deserunt ducimus iste commodi nobis quaerat tenetur qui nesciunt doloribus sunt, ad ullam? Reiciendis sit repellat vero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi placeat numquam molestiae deserunt ducimus iste commodi nobis quaerat tenetur qui nesciunt doloribus sunt, ad ullam? Reiciendis sit repellat vero.</p>
        </offset-block>
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
.tour-section {
  div[class*="col-md-"] {
    padding: 0 10px;
  }
}
</style>
