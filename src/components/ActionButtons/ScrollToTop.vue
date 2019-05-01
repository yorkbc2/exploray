<template>
  <button :class="{'scroll-to-top': true, 'show': show}" @click="handle()">
    <img src="/images/arrow-outline-up.png" alt="" width="36px" height="auto" />
  </button>
</template>

<script>
export default {
  name: "scroll-to-top",
  data: () => ({
    process: false,
    show: false
  }),
  mounted() {
      window.onscroll = e => {
          let scroll = document.scrollingElement.scrollTop;
          this.show = (scroll >= 300);
      }
},
  methods: {
    handle() {
      if (!this.process) {
        this.process = true;
        let scroll = document.scrollingElement.scrollTop;
        const t = setInterval((e) => {
          scroll -= 100;
          document.scrollingElement.scrollTop = scroll;
          if (scroll <= 0) {
            this.process = false;
            clearInterval(t);
          }
        }, 1000/60);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-to-top {
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0 4px;
  border: 0px;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  background-color: #84b4d3;
  bottom: 50px;
  right: 50px;
  z-index: 97;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  &.show {
      opacity: 1;
  }
  img {
    display: block;
  }

  @media screen and (max-width: 768px) {
    bottom: 30px;
    right: 30px;
  }
}
</style>
