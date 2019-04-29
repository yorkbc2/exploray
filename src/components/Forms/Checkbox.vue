<template>
  <label :class="{checkbox: true, reversed: reversed}">
    <span class="label">{{label}}</span>
    <span :class="{'square': true, 'checked': active}"></span>
    <input type="checkbox" @change="onCheck" :checked="$data._checked" :value="label">
  </label>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    change: Function,
    checked: Boolean,
    label: String,
    reversed: Boolean
  },
  data: () => ({
    active: false
  }),
  methods: {
    onCheck(e) {
      this.active = !this.active;
      this.$emit("change", e.target.value);
    }
  },
  mounted() {
    this._checked = this.checked;
  }
};
</script>

<style lang="scss" scoped>
.square {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  padding-left: 0px !important;
  float: right;
  transform: translateY(40%);

  cursor: pointer;
  &.checked {
    &::before {
      content: "";
      position: absolute;
      background-image: url("/icons/check.svg");
      width: 11px;
      height: 11px;
      background-position: center;
      background-size: cover;
      top: 1px;
      left: 1px;
      background-color: #fff;
    }
  }
}
input {
  display: none;
}
.checkbox {
  &.reversed {
    display: flex;
    flex-direction: row-reverse;
    text-align: left;
    justify-content: flex-end;
    padding-left: 20px;

    .square {
      float: left;
      margin-right: 10px;
      border-color: #b7b7b7;
      background-color: #ebebeb;
      &.checked {
        background-color: #0dba00;
        border-color: #0dba00;
        &::before {
          background-color: transparent;
          filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg)
            brightness(102%) contrast(102%);
        }
      }
    }
  }
}
</style>
