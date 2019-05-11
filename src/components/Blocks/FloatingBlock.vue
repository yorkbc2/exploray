<template>
  <div :class="{'floating-block': true, 'floating-block--wide': wide}">
    <h3 class="floating-block__title" v-if="title">{{title}}</h3>
    <div class="floating-block__content">
      <slot name="content"/>
    </div>
    <div class="floating-block__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wide: Boolean,
    title: String
  }
};
</script>

<style lang="scss">
.floating-block {
  position: relative;

  margin: 0 auto;

  display: flex;

  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.96);

  border-radius: 10px;
  padding: 35px 70px;

  &--wide {
    min-width: 810px;
    padding: 35px 50px 15px;

    .floating-block__content {
      margin-bottom: 45px;
    }

    @media screen and (max-width: 1024px) {
      max-width: 600px;
      min-width: 1px;
      width: 100%;
      padding: 30px 120px 20px;
    }
  }

  &__content {
    margin: 25px 0 10px;
  }

  &__footer {
    font-size: 14px;
  }

  &__title {
    font-weight: bolder;
    font-size: 24px;

    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
    width: 82px;
    height: 4px;
    background-color: #0a6aa8;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    padding: 30px 120px 15px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    padding: 30px 15px 15px;
    min-width: 1px;
  }
}
</style>
