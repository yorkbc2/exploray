<template>
  <div class="default-slider">
    <carousel :navigationEnabled="true" :perPageCustom="perPage || defaultPerPage" ref="slider">
      <slot v-if="!slides"/>
      <slide v-else v-for="(slide, index) in slides" :key="index">
        <router-link
          :to="slide.url"
          class="default-slider-block"
          :style="{backgroundImage: `url(${slide.image})`}"
        >
          <div class="default-slider-block__mask">
            <h4>
              {{slide.title}}
              <br>
              <small>{{slide.caption}}</small>
            </h4>
          </div>
        </router-link>
      </slide>
    </carousel>
    <app-lightbox
      v-if="lightBoxOpened"
      @onOpened="toggleLightBox($event)"
      :startAt="lightBoxStartsAt"
      :images="getLightBoxImages"
    />
  </div>
</template>

<script>
import ImageLightBox from "vue-image-lightbox";
import "vue-image-lightbox/dist/vue-image-lightbox.min.css";
export default {
  name: "app-default-slider",
  props: {
    slides: Array,
    perPage: Array,
    lightBoxImages: Array
  },
  components: {
    "app-lightbox": ImageLightBox
  },
  computed: {
    getLightBoxImages() {
      return !this.lightBoxImages
        ? []
        : this.lightBoxImages.map(x => ({
            thumb: x.image,
            src: x.image,
            caption: ""
          }));
    }
  },
  methods: {
    openLightBox(id) {
      this.lightBoxStartsAt = id;
      this.lightBoxOpened = true;
    },
    toggleLightBox(v) {
      this.lightBoxOpened = v;
    }
  },
  data() {
    return {
      defaultPerPage: [[320, 1], [769, 3], [1024, 5]],
      lightBoxOpened: false,
      lightBoxStartsAt: 0
    };
  },
  mounted() {
    const { slider } = this.$refs;
    if (this.lightBoxImages && this.$refs.slider) {
      let slideTriggers = this.$refs.slider.$el.querySelectorAll(
        ".VueCarousel-slide .lightbox-trigger"
      );
      slideTriggers.forEach((trigger, index) => {
        trigger.addEventListener(
          "click",
          e => {
            e.preventDefault();
            this.openLightBox(index);
          },
          false
        );
      });
    }
  }
};
</script>

<style lang="scss">
@mixin mobile-arrows() {
  margin-top: 0px;
  &-button {
    border: 0 !important;
    position: absolute !important;
    top: 35%;
    &::after {
      filter: none;
      width: 30px;
      height: 30px;
    }
  }
  &-prev {
    &::after {
      left: -10px;
      background-image: url("/icons/arrow-outline-left.svg");
    }
  }
  &-next {
    &::after {
      right: -10px;
      background-image: url("/icons/arrow-outline-right.svg");
    }
  }
}
.default-slider-block {
  display: block;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  background-size: cover;
  background-position: left bottom;
  background-repeat: no-repeat;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: 0.4s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &__mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    color: #fff;
    text-align: center;

    small {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 220px;
    height: 220px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    width: 180px;
    height: 180px;

    .default-slider-block__mask {
      h4 {
        font-weight: bolder;
      }
    }
  }
}
.default-slider {
  margin: 0 auto;
  .VueCarousel {
    &-slide {
      margin: 0 auto !important;
    }
    &-navigation {
      text-align: center;
      margin-top: 30px;

      &-button {
        transform: none !important;
        position: relative !important;
        display: inline-block;
        margin: 0 5px !important;

        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #0a6aa8 !important;
        &::after {
          transform: translateY(-50%) translateX(3px);
          width: 27px;
          height: 20px;
          filter: invert(21%) sepia(58%) saturate(3807%) hue-rotate(188deg)
            brightness(95%) contrast(92%);
        }
      }
      &-prev {
        &::after {
          background-image: url("/icons/left-arrow.svg");
        }
      }
      &-next {
        &::after {
          background-image: url("/icons/right-arrow.svg");
        }
      }
      &--disabled {
        border-color: #b2b2b2 !important;
        &::after {
          filter: invert(89%) sepia(9%) saturate(7%) hue-rotate(338deg)
            brightness(82%) contrast(82%);
        }
      }
      @media screen and (max-width: 768px) {
        @include mobile-arrows();
      }
    }
  }
}
.home-results-slider {
  .default-slider {
    .VueCarousel {
      &-navigation {
        @media screen and (max-width: 1200px) {
          @include mobile-arrows();
        }
      }
    }
  }
}
</style>