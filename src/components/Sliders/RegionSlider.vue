<template>
  <div class="region-slider">
    <carousel :navigationEnabled="true" :perPage="5">
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_1.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Крым
              <br>
              <small>10 туров</small>
            </h4>
          </div>
        </router-link>
      </slide>
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_2.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Голландия
              <br>
              <small>2 тура</small>
            </h4>
          </div>
        </router-link>
      </slide>
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_3.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Москва
              <br>
              <small>3 тура</small>
            </h4>
          </div>
        </router-link>
      </slide>
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_4.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Бали
              <br>
              <small>5 туров</small>
            </h4>
          </div>
        </router-link>
      </slide>
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_5.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Мальдивы
              <br>
              <small>5 туров</small>
            </h4>
          </div>
        </router-link>
      </slide>
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_1.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Крым
              <br>
              <small>10 туров</small>
            </h4>
          </div>
        </router-link>
      </slide>
      <slide>
        <router-link
          to="#"
          class="region-block"
          style="background-image: url('/images/region_2.jpg')"
        >
          <div class="region-block__mask">
            <h4>
              Крым
              <br>
              <small>10 туров</small>
            </h4>
          </div>
        </router-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "app-region-slider",
  components: {
    Slide,
    Carousel
  }
};
</script>

<style lang="scss">
.region-block {
  display: block;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  background-size: cover;
  background-position: left bottom;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
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
}
.region-slider {
  margin: 0 auto;
  .VueCarousel {
    &-navigation {
      text-align: center;
      margin-top: 30px;
      
      &-button {
        transform: none;
        position: relative;
        display: inline-block;
        margin: 0 5px!important;

        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #0a6aa8;
        &::after {
          transform: translateY(-50%) translateX(3px);
          width: 27px;
          height: 20px;
          filter: invert(21%) sepia(58%) saturate(3807%) hue-rotate(188deg) brightness(95%) contrast(92%);
        }
        
      }
      &-prev {
        &::after {
          background-image: url('/icons/left-arrow.svg');
        }
      }
      &-next {
        &::after {
          background-image: url('/icons/right-arrow.svg');
        }
      }
      &--disabled {
        border-color: #b2b2b2;
        &::after {
          filter: invert(89%) sepia(9%) saturate(7%) hue-rotate(338deg) brightness(82%) contrast(82%);
        }
      }
    }
  }
}
</style>