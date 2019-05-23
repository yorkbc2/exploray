<template>
  <div class="popup">
    <div class="popup-overlay" @click="close()"></div>
    <div class="popup-block">
      <h3 v-if="title" class="popup__title">{{title}}</h3>
      <p v-if="subtitle" class="popup__subtitle">{{subtitle}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String
    },
    methods: {
        close() {
          this.$emit('close');
        }
    }
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 2000;
  &,
  &-overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__title,
  &__subtitle {
      text-align: center;
  }

  &__title {
      font-weight: bold;
      font-size: 22px;
  }

  &__subtitle {
      font-size: 18px;
      font-weight: lighter;
  }

  &-block {
      position: absolute;
      padding: 30px 40px;
      background-color: #fff;
      border-radius: 5px;
      max-width: 500px;
      width: 100%;

      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      @media screen and (max-width: 767px) {
          max-width: 100%;
          padding: 50px 40px 30px;
          min-width: 100%;
          border-radius: 0px;
          top: 0px;
          transform: none;
          left: 0px;
      }

      &::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 4px;
          background-color: #0dba00;
          left: 50%;
          top: 0px;
          transform: translateX(-50%);
      }
  }
}
</style>
