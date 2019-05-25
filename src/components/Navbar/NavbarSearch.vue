<template>
  <div
    :class="{'nav__search': true, 'opened': isOpened}"
    @mouseenter="mouseOver()"
    @mouseleave="mouseOut()"
  >
    <input
      type="search"
      class="input"
      placeholder="Поиск тура"
      ref="input"
      @focus="focusIn()"
      @blur="focusOut()"
    >
    <icon name="search"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      focused: false
    };
  },
  methods: {
    mouseOver() {
      this.isOpened = true;
    },
    mouseOut() {
      if (!this.focused && !this.$refs.input.value) {
        this.isOpened = false;
      }
    },
    focusIn() {
      this.focused = true;
    },
    focusOut() {
      this.focused = false;
      if (!this.$refs.input.value) {
        this.isOpened = false;
      }
    }
  }
};
</script>


<style lang="scss">
.nav__search {
  position: relative;
  max-width: 50px;
  margin: 0 15px;
  transition: max-width 0.4s ease-in-out;
  cursor: pointer;

  input {
    width: 100%;
    padding: 10px 35px 10px 15px;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 50px;
    background-color: transparent;
    color: #fff;
    border-color: transparent;
    transition: border-color 0.4s ease-in-out;

    &::placeholder {
      color: #fff;
    }
  }

  svg {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%) scale(0.9);
    transition: right 0.4s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    max-width: 200px;
    input {
      border-color: #fff;
    }
    svg {
      right: 20px;
    }
  }

  &.opened {
    max-width: 170px;
    input {
      border-color: #fff;
    }
    svg {
      right: 20px;
    }
  }
}
</style>
