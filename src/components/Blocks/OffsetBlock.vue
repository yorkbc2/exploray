<template>
  <div class="block-with-image">
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
    uppercased: Boolean
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
    padding: 25px 100px 25px 25px;
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

    &::after {
      content: "EXPLORAY";
      display: block;
      position: absolute;
      top: -22px;
      right: 1px;
      font-weight: bolder;
      font-size: 58px;
      color: #efefef;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    &__img {
      display: none;
    }
    &__content {
      position: relative;
      top: 0px;
      transform: none;
      box-shadow: none;
      width: 100%;
      padding: 0px;

      &::after {
        position: static;
        display: block;
        top: 0px;
        right: auto;
      }

      h3 {
        text-transform: uppercase;
        margin-bottom: 10px;
        padding-bottom: 0px;
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>
