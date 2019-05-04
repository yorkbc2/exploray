<template>
  <div class="inline-slider-wrapper">
    <div class="container">
      <carousel :navigationEnabled="true" :perPage="5" :perPageCustom="[[300, 2], [768, 5]]">
        <slot></slot>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-inline-slider"
};
</script>

<style lang="scss">
.inline-slider-wrapper {
  background: #0a6aa8;
  padding: 20px 0;
  position: relative;
  .VueCarousel {
    &-pagination {
      > div {
        margin-top: 0px !important;
      }
      @media screen and (min-width: 769px) {
        display: none;
      }
    }
    &-dot {
      &--active {
        background-color: #fff !important;
      }
    }
    &-navigation {
      &-button {
        @media screen and (max-width: 768px) {
          &::after {
            width: 20px;
            height: 20px;
          }
        }
      }
      &-next {
        right: 35px !important;
      }
      &-prev {
        left: 5px !important;
      }
    }
  }
}

.inline-slide {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 200px;
  color: #fff;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    max-width: 110px;
    margin: 0 auto;
  }
  img {
    display: block;
    height: 30px;
    width: auto;
    margin-bottom: 5px;
  }

  span {
    text-transform: uppercase;
    display: inline-block;
  }
  &:hover {
    color: rgba(#fff, 0.7);
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    span {
      text-transform: none;
    }
  }
}
</style>