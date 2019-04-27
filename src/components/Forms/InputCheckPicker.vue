<template>
  <div class="check-picker-wrapper">
    <input
      type="text"
      :value="checked.join(', ').trim()"
      :disabled="true"
      :placeholder="placeholder"
    >
    <button class="toggler">
      <i :class="{'fa': true, 'fa-chevron-down' : !isOpened, 'fa-chevron-up': isOpened}"/>
    </button>
    <div class="overlay" @click="toggle"></div>
    <div class="check-picker" v-if="isOpened">
      <checkbox v-for="(item, index) in items" :key="index" :label="item" @change="onChange"/>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  name: "input-check-picker",
  components: {
    Checkbox
  },
  props: {
    items: Array,
    onCheck: Function,
    placeholder: String
  },
  data: () => ({
    checked: [],
    isOpened: false
  }),
  methods: {
    onChange(value) {
      let index = this.checked.indexOf(value);
      if (index === -1) {
        this.checked.push(value);
      } else {
        this.checked.splice(index, 1);
      }
      if (this.onCheck) {
        this.onCheck(this.checked);
      }
    },
    toggle() {
      this.isOpened = !this.isOpened;
    }
  }
};
</script>

<style lang="scss">
.check-picker-wrapper {
  position: relative;

  > input {
    color: #aeaeae;
    font-size: 14px;
    &::placeholder {
      color: #aeaeae;
    }
  }

  .toggler {
    position: absolute;
    background: transparent;
    border: 0px;
    font-size: 14px;
    color: #ccc;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .check-picker {
    position: absolute;
    width: 215px;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    top: 100%;
    right: 0px;

    label {
      display: block;
      position: relative;
      > span.label {
        padding-left: 20px;
        &::before {
          content: "•";
          position: absolute;
          font-size: 30px;
          display: inline-block;
          color: #c77512;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      > input {
        border: 1px solid #e7e7e7;
        float: right;
        height: auto;
        transform: translateY(50%);
      }
    }
  }
}
</style>
