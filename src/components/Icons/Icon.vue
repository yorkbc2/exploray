<template>
  <img-to-svg
    v-if="src"
    :src="src"
    :width="24"
    :height="24"
    :fill="fill || '#fff'"
    :hoverFill="hoverFill || '#ececec'"
    :styles="styles"
  />
</template>

<script>
export default {
  props: {
    name: String,
    fill: String,
    hoverFill: String
  },
  data: () => ({
    icons: {
      facebook: "/icons/facebook.svg",
      instagram: "/icons/instagram.svg",
      vk: "/icons/vk.svg",
      search: "/icons/search.svg",
      libra: "/icons/libra.svg",
      squares: "/icons/squares.svg",
      bars: "/icons/bars.svg"
    },
    src: "",
    styles: {},
    additionalStyles: { 
      vk: {
        width: "34px",
        height: "34px",
        transform: "translateY(5px)"
      },
      squares: {
          fill: "#a6a6a6",
          width: "18px",
          height: "18px"
      },
      bars: {
          fill: "#a6a6a6",
          width: "22px",
          height: "22px"
      }
    }
  }),
  mounted() {
    this.src = this.icons[this.name] || "";
    this.styles = this.additionalStyles[this.name] || {};
  }
};
</script>