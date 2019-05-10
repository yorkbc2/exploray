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
    <label v-if="invalid" class="error">{{ error }}</label>
  </div>
</template>

<script>
export default {
  props: {
    error: String,
    name: String,
    type: String,
    placeholder: String,
    defaultValue: String
  },
  data() {
    return {
      invalid: false,
      value: this.defaultValue || ""
    };
  },
  methods: {
    touch() {
        this.invalid = !this.value;
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

  label {
    color: red;
    margin-top: 5px;
    font-size: 14px;
  }

  &--error {
    margin-bottom: 0px;
  }
}
</style>
