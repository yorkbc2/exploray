<template>
  <label class="d-flex select-wrapper">
    <span class="d-flex flex-column justify-content-center">{{label}}</span>
    <select class="select" :placeholder="placeholder">
      <option
        v-for="(value, index) in values"
        :key="index"
        :value="value"
        :selected="!placeholder && index === 0"
      >{{value}}</option>
    </select>
  </label>
</template>
 
<script>
export default {
  props: {
    label: String,
    values: Array,
    placeholder: String
  }
};
</script>
 
<style lang="scss" scoped>
label {
  margin-bottom: 0px;
}
select {
  margin-left: 10px;
}
.select-wrapper {
  position: relative;
  &::after {
    content: "\f078";
    position: absolute;
    font-family: "FontAwesome";
    font-size: 14px;
    color: #8e8e8e;
    top: 50%;
    right: 7px;
    padding-top: 2px;
    transform: translateY(-50%);
    background-color: #f6f6f6;
    width: 18px;
    height: 24px;
    text-align: left;
  }
}
</style> 