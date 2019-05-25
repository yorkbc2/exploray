<template>
  <div class="home">
    <app-intro
      :backgroundImages="['/images/slider.jpg', 'https://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg']"
      :headers="['Мир интереснее , чем кажется!', 'Ещё один слайд для показа']"
    />
    <app-intro-inline-slider/>
    <section class="section" v-if="$store.getters.searchResults.length" id="home-search-results">
      <div class="container">
        <h3 class="section__subtitle">Результаты поиска:</h3>
        <div v-if="isAdaptiveProducts" class="home-results-slider">
          <app-default-slider :perPage="[[320, 1], [768, 2], [1024, 3]]">
            <slide v-for="(item, index) in $store.getters.searchResults" :key="index">
              <product-card :data="item"/>
            </slide>
          </app-default-slider>
        </div>
        <div v-else class="home-results-grid">
          <product-card
            v-for="(item, index) in $store.getters.searchResults"
            :key="index"
            :data="item"
          />
        </div>
        <div class="text-center">
          <button type="button" class="button button-green button--large">Расширенный поиск</button>
        </div>
      </div>
    </section>
    <section class="section tour-section">
      <div class="container">
        <h2 class="section__title">Актуальные предложения</h2>
        <covered-blocks :items="
          coveredBlocks
        "/>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Направления</h2>
        <app-default-slider
          :perPage="[[320, 1], [768, 3], [1024, 5]]"
          :slides="[
          {
            title: 'Крым',
            caption: '10 туров',
            url: '#',
            image: '/images/region_1.jpg'
          },
          {
            title: 'Крым',
            caption: '10 туров',
            url: '#',
            image: '/images/region_2.jpg'
          },
          {
            title: 'Крым',
            caption: '10 туров',
            url: '#',
            image: '/images/region_3.jpg'
          },
          {
            title: 'Крым',
            caption: '10 туров',
            url: '#',
            image: '/images/region_4.jpg'
          },
          {
            title: 'Крым',
            caption: '10 туров',
            url: '#',
            image: '/images/region_5.jpg'
          },
          {
            title: 'Крым',
            caption: '10 туров',
            url: '#',
            image: '/images/region_1.jpg'
          }
        ]"
        />
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
import CoveredBlocks from "@/components/Blocks/CoveredBlocks.vue";
import DefaultSlider from "@/components/Sliders/DefaultSlider.vue";
import IntroInlineSlider from "@/components/Sliders/IntroInlineSlider.vue";
import IntroSlider from "@/components/Sliders/IntroSlider.vue";
import ProductCardVue from "../components/Product/ProductCard.vue";
export default {
  components: {
    "app-subscribe": Subscribe,
    "app-default-slider": DefaultSlider,
    "app-intro-inline-slider": IntroInlineSlider,
    "covered-blocks": CoveredBlocks,
    "app-intro": IntroSlider,
    "product-card": ProductCardVue
  },
  data() {
    return {
      coveredBlocks: [
        {
          title: "Горная гладь",
          subtitle: "от 10 00 руб.",
          url: "#",
          image: "/images/tour_1.jpg",
          children: [
            {
              title: "Туры по фестивалям",
              subtitle: "от 10 00 руб.",
              url: "#",
              image: "/images/tour_4.jpg",
              children: [
                {
                  title: "К звездам",
                  subtitle: "от 10 00 руб.",
                  url: "#",
                  image: "/images/tour_2.jpg"
                },
                {
                  title: "Восхождение",
                  subtitle: "от 10 00 руб.",
                  url: "#",
                  image: "/images/tour_3.jpg"
                }
              ]
            }
          ]
        },
        {
          title: "Горная гладь",
          subtitle: "от 10 00 руб.",
          url: "#",
          image: "/images/tour_1.jpg",
          children: [
            {
              title: "Туры по фестивалям",
              subtitle: "от 10 00 руб.",
              url: "#",
              image: "/images/tour_4.jpg",
              children: [
                {
                  title: "К звездам",
                  subtitle: "от 10 00 руб.",
                  url: "#",
                  image: "/images/tour_2.jpg"
                },
                {
                  title: "Восхождение",
                  subtitle: "от 10 00 руб.",
                  url: "#",
                  image: "/images/tour_3.jpg"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    isAdaptiveProducts() {
      return window.innerWidth <= 1200;
    }
  }
};
</script>

<style lang="scss" scoped>
.tour-section {
  div[class*="col-md-"] {
    padding: 0 10px;
  }

  @media screen and (max-width: 1024px) {
    div[class*="col-md-"] {
      padding: 0;
    }
    .row {
      margin: 0px;
    }

    .row > .col-md-6 {
      width: 100%;
      flex: none;
      max-width: 100%;
    }
  }
}

.home-results-grid {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  flex-wrap: wrap;

  > article.card {
    margin: 0px 20px 20px 0px;
    flex: 1;

    position: relative;
    max-width: 260px;
    min-width: 260px;
    &:nth-child(4n) {
      margin-right: 0px;
    }

    @media screen and (max-width: 1200px) {
      max-width: 255px;
      min-width: 230px;
      width: 100%;
    }
  }
}

.home-results-slider {
  margin-bottom: 30px;

  .VueCarousel {
    &-slide {
      @media screen and (min-width: 768px) and (max-width: 1024px) {
        &:nth-child(even) {
          article.card {
            margin: 0px auto 10px 15px;
          }
        }
        &:nth-child(odd) {
          article.card {
            margin: 0px 15px 10px auto;
          }
        }
      }
    }
  }

  article.card {
    @media screen and (max-width: 767px) {
      max-width: 240px;
    }
  }
}

#home-search-results {
  @media screen and (max-width: 1200px) {
    > .container {
      max-width: 95%;
    }
  }
}
</style>
