<template>
  <ul class="splitted-list">
    <li>Войти через:</li>
    <li>
      <a href="#">
        <img src="/images/f-filled.png" alt="Facebook" title="Facebook">
      </a>
    </li>
    <li class="splitted-list__splitter">{{splitter}}</li>
    <li>
      <a href="#">
        <img src="/images/vk-filled.png" alt="Facebook" title="Facebook">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    splitter: String
  }
};
</script>


<style lang="scss" scoped>
ul.splitted-list {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 15px 0px;
  padding: 0;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  li {
    display: inline-flex;
    list-style: none;

    justify-content: center;
    flex-direction: column;

    margin-right: 10px;

    &:first-child {
      margin-right: 0px;
      font-size: 16px;
      margin-right: 20px;
    }

    &:last-child {
        margin-right: 0px;
    }

    &.splitted-list__splitter {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 30px 0;
    flex-wrap: wrap;
    > li {
      &:first-child {
        margin-bottom: 10px;
        margin-right: 0px;
        width: 100%;
      }
    }
  }
}
</style>

