<template>
  <div class="price-range">
    <div class="d-flex justify-content-between">
      <input type="tel" disabled :value="minValue" class="input"> 
      <input type="tel" disabled :value="maxValue" class="input">
    </div>
    <slider-component
      :enable-cross="false"
      v-model="value"
      :min-range="0"
      :max-range="100"
      :min="getMin"
      :max="getMax"
      :tooltip="'none'"
      @change="onChange"
    />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  props: {
    range: Number,
    min: Number,
    max: Number,
    prefix: Array,
    postfix: Array,
    interval: Number
  },
  data() {
    return {
      value: [0, 100]
    };
  },
  components: {
    "slider-component": VueSlider
  },
  methods: {
      onChange(value) {
          this.value = value;
      },
      getValue(percent) {
        console.log(this.range, percent)
          return parseInt((this.range / 100)  * percent);
      }
  },
  computed: {
      minValue() {
          return `${this.getPrefix[0]} ${this.getValue(this.value[0])} ${this.getPostfix[0]}`;
      },
      maxValue() {
          return `${this.getPrefix[1]} ${this.getValue(this.value[1])} ${this.getPostfix[1]}`;
      },
      getMin() {
        return this.min || 0;
      },
      getMax() {
        return this.max || 100;
      },
      getPrefix() {
        return this.prefix || ["от", "до"];
      },
      getPostfix() {
        return this.postfix || ["", ""]
      },
      getInterval() {
        return this.interval || 10;
      }
  }
};
</script>

<style lang="scss">
.vue-slider-dot-handle {
    background-color: #0a6aa8;
    box-shadow: 0 0 0 0;
}
.vue-slider-process {
    background-color: #0dba00;
}
.vue-slider-rail {
    background-color: #e1e1e1;
}
.vue-slider {
    margin-top: 20px;
}
.price-range {
    .input {
        padding: 12px 10px;
        font-size: 14px;
        text-align: center;
        background-color: #f6f6f6;
        max-width: 120px;
    }
}
</style>
