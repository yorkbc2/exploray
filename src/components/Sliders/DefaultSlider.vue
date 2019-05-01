<template>
  <div class="default-slider">
    <carousel :navigationEnabled="true" :perPageCustom="[[300, 1], [768, 5]]">
      <slide v-for="(slide, index) in slides" :key="index">
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
  </div>
</template>

<script>
export default {
  name: "app-default-slider",
  props: {
    slides: Array
  }
};
</script>

<style lang="scss">
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

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
    margin: 0 auto;
  }
}
.default-slider {
  margin: 0 auto;
  .VueCarousel {
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
        margin-top: 0px;
        &-button {
          border: 0!important;
          position: absolute!important;
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
    }
  }
}
</style>