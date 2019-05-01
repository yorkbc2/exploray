<template>
  <header class="header text-center" :style="{ backgroundImage: `url(${background})` }">
    <div class="container">
      <div class="header__container">
        <h1 class="header__title">{{title}}</h1>
        <slot/>
        <div class="header__breads">
          <app-header-breads v-if="!!breads" :path="breads"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderBreads from "./HeaderBreads.vue";
export default {
  name: "app-header",
  props: {
    title: String,
    breads: Object,
    background: String
  },
  components: {
    "app-header-breads": HeaderBreads
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 30px;

  &__container {
    position: relative;
    padding: 100px 0;
  }

  &__title {
    font-size: 42px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 30px;
  }

  &__breads {
    position: absolute;
    bottom: 15px;
    left: 0px;
  }

  @media screen and (max-width: 768px) {
    &__container {
      padding: 180px 0;
    }

    &__title {
      font-size: 36px;
      margin: 0px auto 30px;
      max-width: 400px;
    }
  }
  
  @media screen and (max-width: 768px) {
    &__container {
      padding: 120px 0;
    }

    &__title {
      margin-bottom: 40px;
    }
  }
}
</style>

