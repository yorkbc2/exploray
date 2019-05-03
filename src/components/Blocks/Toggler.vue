<template>
  <div class="toggler-wrapper">
    <div class="toggler-group">
      <button v-for="(item, index) in items" :key="index" @click="toggle(index)" :class="{'active': index === currentIndex}">{{item}}</button>
    </div>
    <div class="toggler-content" ref="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array // Array of button names,
  },
  data() {
    return {
      currentIndex: 0,
      sections: []
    };
  },
  methods: {
    toggle(index) {
      this.currentIndex = index;
      this.sections[index].style.display = "block";
      this.sections.forEach((i, j) =>
        index !== j ? (i.style.display = "none") : null
      );
    }
  },
  mounted() {
    this.sections = this.$refs.content.querySelectorAll(".toggler-item");
    this.sections.forEach((i, j) =>
      j !== 0 ? (i.style.display = "none") : null
    );
  }
};
</script>

<style lang="scss" scoped>
.toggler-wrapper {
    .toggler-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
        > button {
            display: inline-block;
            padding: 15px 50px;
            border: 1px solid #0dba00;
            font-weight: bolder;
            background-color: #fff;
            outline: none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            &:first-child {
                border-radius: 50px 0 0 50px;
            }
            &:last-child {
                border-radius: 0 50px 50px 0;
            }
            &.active {
                background-color: #0dba00;
                color: #fff;
            }
        }
    }
}
</style>
