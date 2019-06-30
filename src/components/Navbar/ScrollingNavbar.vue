<template>
  <div :class="{'scrolling-navbar': true, 'visible': visible}">
    <img src="/images/to-top.png" alt />
    <ul>
      <li>
        <a href="#">Путешествия</a>
      </li>
      <li>
        <a href="#">Маркетплэйс</a>
      </li>
      <li>
        <a href="#">Присоединиться</a>
      </li>
    </ul>
    <button type="button" class="button button-green">Заказать</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  mounted() {
      window.addEventListener('scroll', () => this.visible = document.scrollingElement.scrollTop >= 500);
  }
};
</script>

<style lang="scss" scoped>
.scrolling-navbar {
  position: fixed;
  top: -999px;
  left: 0px;

  width: 100%;
  padding: 10px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(45, 106, 163, 0.5);
  z-index: 11111;

  opacity: 0;
  transition: opacity 0.3 ease-in-out;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  &.visible {
    top: 0px;
    opacity: 1;
  }

  &.hidden {
    display: none !important;
  }

  > button {
    font-weight: bold;
    padding: 7px 25px;
  }

  > img {
    width: 100%;
    max-width: 150px;
  }

  > ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;

      margin: 0 25px;

      a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}
</style>
