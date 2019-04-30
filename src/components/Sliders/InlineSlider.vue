<template>
  <div class="inline-slider-wrapper">
    <div class="container">
      <carousel :navigationEnabled="true" :perPage="5" :perPageCustom="[[480, 2], [1024, 5]]">
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
      @media screen and (min-width: 769px) {
        display: none;
      }
    }
    &-dot {
      &--active {
        background-color: #fff!important;
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
}
</style>