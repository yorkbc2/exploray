<template>
  <label class="d-flex select-wrapper">
    <span class="d-flex flex-column justify-content-center">{{label}}</span>
    <select class="select">
      <option
        v-for="(value, index) in values"
        :key="index"
        :value="value"
        :selected="index === 0"
      >{{value}}</option>
    </select>
  </label>
</template>
 
<script>
export default {
  props: {
    label: String,
    values: Array
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
</style> 