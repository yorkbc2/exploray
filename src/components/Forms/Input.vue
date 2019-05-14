<template>
  <div :class="{'input-container': true, 'input-container--error': invalid, 'input-container--inline': inline}">
    <label v-if="label" class="input-label">
      <slot name="icon" />
      {{label}}
    </label>
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
    label: String,
    validators: Array,
    inline: Boolean
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

  > label.input-label {
    font-size: 14px;
    color: #757575;

    display: block;
    text-align: left;
    padding-left: 30px;

    &.input-label--between {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &--error {
    margin-bottom: 5px;
  }

  &--inline {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 100%!important;
    > input.input {
      max-width: 250px!important;
      margin: 0!important;
    }
    > label.input-label {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 0px;
      margin-right: 20px;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;

      > label.input-label {
        padding-left: 30px;
      }

      > input.input {
        max-width: 100%!important;

      }
    }
  }
}
</style>
