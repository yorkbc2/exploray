<template>
  <div class="svg-inserted">  
    <div v-html="html" class="svg-container" ref="container"></div>
    <img v-if="error" :src="src" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "img-to-svg",
  props: {
    src: String,
    width: Number,
    height: Number,
    fill: String,
    hoverFill: String,
    styles: Object
  },
  data: () => ({
    html: '',
    error: false
  }),
  mounted() {
    axios.get(this.src)
      .then(response => {
        const {data} = response;
        this.html = data;
        setTimeout(() => {
          const svg = this.$refs.container.querySelector('svg');
          svg.setAttribute('width', this.width || 0);
          svg.setAttribute('height', this.height || 0);
          svg.setAttribute('fill', this.fill);
          if (this.styles) {
            for (const i in this.styles) {
              svg.style[i] = this.styles[i];
            }
          }
          svg.addEventListener('mouseover', () => {
            svg.setAttribute('fill', this.hoverFill);
          });
          svg.addEventListener('mouseout', () => {
            svg.setAttribute('fill', this.fill);
          });
          
        }, 0)
      })
      .catch(() => {
        this.error = true;
      })
  }
};
</script>