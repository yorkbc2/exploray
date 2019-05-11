<template>
  <div :class="{'input-container': true, 'input-container--error': invalid}">
    <input
      class="input input--block text-center"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="change($event.target.value)"
    >
    <label v-if="error && invalid && !errorHidden" class="error input-warning">{{ error }}</label>
  </div>
</template>

<script>
export default {
  props: {
    error: String,
    name: String,
    type: String,
    placeholder: String,
    defaultValue: String,
    validators: Array
  },
  data() {
    return {
      invalid: false,
      value: this.defaultValue || "",
      errorHidden: false
    };
  },
  methods: {
    touch() {
      this.invalid = !this.value;
    },
    hideError() {
      return (this.errorHidden = true);
    },
    change(value) {
      this.value = value;
    }
  }
};
</script>

<style lang="scss">
.input-container {
  flex: 1;
  margin-bottom: 15px;

  &--error {
    margin-bottom: 5px;
  }
}
</style>
