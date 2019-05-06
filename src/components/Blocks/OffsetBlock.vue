<template>
  <div :class="{'block-with-image': true, 'reversed': reversed}">
    <div class="block-with-image__img">
      <img :src="image" alt>
    </div>
    <div class="block-with-image__content">
      <h3
        :class="['section__title section__title--left', (typeof uppercased === 'boolean' && !uppercased ? '' : 'section__title--uppercased')]"
      >{{header}}</h3>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "offset-block",
  props: {
    header: String,
    image: String,
    uppercased: Boolean,
    reversed: Boolean
  }
};
</script>


<style lang="scss" scoped>
.block-with-image {
  margin-top: 40px;
  display: flex;
  position: relative;
  &__img {
    max-width: 800px;
    img {
      width: 100%;
    }
  }

  &__content {
    position: absolute;
    width: 500px;
    padding: 30px 100px 25px 25px;
    box-shadow: 2.5px 4.33px 18px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    right: 0px;
    max-width: 100%;
    top: 50%;
    transform: translateY(-50%);

    

    h3 {
      padding-bottom: 20px;
      margin-bottom: 20px;
      &::after {
        width: 36px;
      }
    }

    
    .stars {
      margin: 0;
    }

    h4 {
      font-size: 16px;
      font-weight: bolder;
      margin-bottom: 10px;
    }

    a:not(.button) {
      color: #0dba00;
      text-decoration: underline;
      font-weight: lighter;
    }

    a.button {
      font-weight: lighter;
      display: inline-block;
      padding: 10px 30px;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }

    &::after {
      content: "EXPLORAY";
      display: block;
      position: absolute;
      top: -21px;
      right: 1px;
      font-weight: bolder;
      font-size: 52px;
      color: #efefef;
    }
  }
  @media screen and (max-width: 1200px) {
    &__content {
      min-width: 450px;
      padding: 25px;
    }
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    .d-flex {
      flex-direction: column;
      a.button {
        width: 100%;
        margin-top: 15px;
        font-weight: 500;
        text-align: center;
      }
    }
    &__img {
      display: none;
    }
    &__content {
      position: relative;
      top: 0px;
      transform: none;
      box-shadow: none;
      width: 100%;
      padding: 10px;
      min-width: 0px;
      background-color: transparent;

      &::after {
        position: static;
        display: block;
        top: 0px;
        right: auto;
      }

      h3 {
        margin-bottom: 25px;
        padding-bottom: 0px;
        &::after {
          display: none;
        }
      }
    }
  }

  &.reversed {
    .block-with-image__img {
      margin-left: auto;
    }
    .block-with-image__content {
      right: auto;
      left: 0px;
      padding: 30px;

      @media screen and (max-width: 560px) {
        padding: 10px;
      }
    }
  }
}
</style>
