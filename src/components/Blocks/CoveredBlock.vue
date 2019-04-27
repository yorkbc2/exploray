<template>
  <div
    class="covered-block"
    :style="{ height: `${fixedHeight}px`, backgroundImage: `url(${background})` }"
  >
    <h3>
        {{header}}
    </h3>
    <p>
        {{content}}
    </p>

    <router-link :to="url" class="link" v-if="isButton">
        Подробнее
    </router-link>
    <!-- <img v-if="showCursor" src="/images/cursor.png" width="25px" height="auto" class="cursor" /> -->
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    content: String,
    fixedHeight: Number,
    isButton: Boolean,
    url: String,
    background: String,
    showCursor: Boolean
  }
};
</script>

<style lang="scss" scoped>
.covered-block {
  display: block;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2px;
  margin-bottom: 15px;
  width: 100%;
  padding: 15px 15px 25px;
  color: #fff;
  flex: 1;
  overflow: hidden;
  h3 {
    position: relative;
    font-size: 24px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    font-weight: bold;
    &::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 24px;
      height: 2px;
      background-color: #fff;
    }
  }

  p {
      font-size: 18px;
  }

  .link {
      display: inline-block;
      position: absolute;
      bottom: 25px;
      left: 15px;
      padding: 6px 40px;
      border: 1px solid #fff;
      color: #fff;
      font-size: 18px;
      border-radius: 50px;
      font-weight: bolder;
      text-decoration: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba( 0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    &,
    .link {
      cursor: url('/images/cursor.png'), auto;
    }
    &::before {
      opacity: 1;
    }
  }

  // .cursor {
  //   position: absolute;
  //   right: 15px;
  //   bottom: 25px;
  // }
}
</style>
