<template>
  <div class="header-breads">
    <router-link v-for="(key, index) in pathKeys" :key="index" :to="key">{{path[key]}}</router-link>
  </div>
</template>

<script>
export default {
  name: "app-header-breads",
  props: {
    /**
     * {
     *  '/': Главная
     * }
     */
    path: Object
  },
  computed: {
    pathKeys() {
      return Object.keys(this.path);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-breads {
  a {
    color: #fff;
    text-decoration: none;

    &:not(:last-child)::after {
      content: "";
      position: relative;
      display: inline-block;
      width: 21px;
      height: 21px;
      margin-left: 5px;
      margin-right: 5px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transform: translateY(25%);
      background-image: url("/images/arrow-right.png");
    }
  }
}
</style>
