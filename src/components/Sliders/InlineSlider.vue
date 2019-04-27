<template>
  <div class="inline-slider-wrapper">
    <div class="container">
      <carousel :navigationEnabled="true" :perPage="5" :paginationEnabled="false">
        <slot></slot>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel } from "vue-carousel";
export default {
  name: "app-inline-slider",
  components: {
    Carousel
  }
};
</script>

<style lang="scss">
.inline-slider-wrapper {
  background: #0a6aa8;
  padding: 20px 0;
  position: relative;
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