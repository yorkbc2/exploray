<template>
  <div class="covered-block" :style="{ 'background-image': `url(${data.image})` }">
    <div class="covered-block__header">
      <h3>{{data.title}}</h3>
      <p class="covered-block__subtitle">{{data.subtitle}}</p>
    </div>
    <router-link :to="data.url" class="link">Подробнее</router-link>
    <div class="covered-block__mask"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.covered-block {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    min-height: 335px;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    min-height: 300px;
    padding: 35px 20px;
  }

  &.fixed-height {
    min-height: 400px;

    @media screen and (max-width: 1024px) {
      min-height: 335px;
    }
    @media screen and (max-width: 767px) {
      min-height: 300px;
    }
  }

  &__header {
    color: #fff;
    z-index: 2;
    h3 {
      font-weight: bolder;
      font-size: 24px;

      position: relative;
      margin-bottom: 15px;
      padding-bottom: 15px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 24px;
        height: 2px;
        background-color: #fff;
        @media screen and (max-width: 767px) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    p {
      font-size: 18px;
      margin: 0px;
      padding: 0px;
    }
  }

  .link {
    display: inline-block;
    color: #fff;
    text-decoration: none;

    padding: 8px 35px;
    border-radius: 50px;
    font-weight: bold;
    border: 1px solid #fff;
    text-align: center;
    max-width: 200px;
    opacity: 0;

    transition: opacity 0.4s ease-in-out;
    z-index: 2;
    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
  }

  &__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    .link {
      opacity: 1;
    }
    .covered-block__mask {
      opacity: 1;
    }
  }
}
</style>
