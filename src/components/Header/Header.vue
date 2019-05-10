<template>
  <header
    :class="{'header text-center': true, 'header--full': full}"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="container">
      <div class="header__container">
        <h1 class="header__title" v-if="title">{{title}}</h1>
        <slot/>
        <div class="header__breads" v-if="!!breads">
          <app-header-breads :path="breads"/>
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
    background: String,
    full: Boolean
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

  &--full {
    min-height: 768px;
    margin-bottom: 0px;

    .header__title {
      font-size: 96px;
      opacity: 0.5;
      line-height: 70%;
      font-weight: bold;
      text-transform: uppercase;
      max-width: 100%;

      @media screen and (max-width: 1220px) {
        font-size: 76px;
      }
      @media screen and (max-width: 1024px) {
        font-size: 60px;
      }
      @media screen and (max-width: 767px) {
        font-size: 26px;
      }
    }

    .header__container {
      padding-top: 60px;
      
      @media screen and (max-width: 1220px) {
        padding-top: 75px;
      }
      @media screen and (max-width: 1024px) {
        padding-top: 140px;
      }
      @media screen and (max-width: 767px) {
        padding-top: 100px;
      }
    }

    @media screen and (max-width: 767px) {
      > .container {
        max-width: 100%;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }

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

