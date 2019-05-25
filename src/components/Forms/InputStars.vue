<template>
  <ul :class="{stars: true, 'stars--big': big}">
    <li v-for="index in 5" :key="index" v-if="(hideEmpty && index <= stars) || !hideEmpty">
      <i :class="{'fa fa-star': true, 'active': index <= stars}"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "app-stars",
  props: {
    stars: Number,
    big: Boolean,
    hideEmpty: Boolean
  }
};
</script>
 
<style lang="scss" scoped>
.stars {
  margin: 2px 0 0 10px;
  padding: 0;
  display: flex;
  justify-content: flex-start;

  li {
    list-style: none;

    display: inline-block;
    margin-right: 7px;

    i {
      font-size: 18px;
      color: #b7b7b7;
      &.active {
        color: #e7da0f;
      }
    }
  }

  &--big {
    li {
      margin-right: 3px;
      i {
        font-size: 22px;

        &.active {
          color: #e5ac00;
        }
      }
    }
  }
}
</style>
