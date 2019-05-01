<template>
  <div id="app">
    <navbar v-if="!isMobile"/>
    <mobile-navbar v-else :isHomePage="isHomePage"/>
    <router-view/>
    <scroll-to-top/>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import ScrollToTop from "@/components/ActionButtons/ScrollToTop.vue";
import store from "./store/index.js";
import MobileNavbarVue from "./components/Navbar/MobileNavbar.vue";
import { watch } from "fs";
export default {
  store,
  components: {
    Navbar,
    "mobile-navbar": MobileNavbarVue,
    "app-footer": Footer,
    ScrollToTop
  },
  data() {
    return {
      isMobile: false,
      isHomePage: false
    };
  },
  methods: {
    changeDevice(width) {
      if (width <= 960) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  },
  mounted() {
    window.onresize = () => {
      this.changeDevice(window.innerWidth);
    };
    window.onload = () => {
      this.changeDevice(window.innerWidth);
      this.isHomePage = this.$route.name === "home";
    };
  },
  watch: {
    $route(to) {
      if (to.name !== "home") {
        this.isHomePage = false;
      } else {
        this.isHomePage = true;
      }
    }
  }
};
</script>


<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;
}
section {
  padding: 50px 0;

  .section__title {
    font-size: 28px;
    font-weight: bolder;
    position: relative;
    display: block;
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 45px;
    &::after {
      content: "";
      position: absolute;
      width: 64px;
      height: 2px;
      background: #000;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &--left {
      text-align: left;

      &::after {
        left: 0px;
        transform: none;
      }
    }

    &--uppercased {
      padding-bottom: 25px;
      margin-bottom: 25px;
      text-transform: uppercase;
      &::after {
        height: 1px;
        width: 36px;
      }
    }
  }

  &.section {
    &--colored {
      background: #f6f6f6;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0;
    .section__title {
      font-size: 24px;
    }
  }
}

.input {
  padding: 15px 30px;
  border-radius: 50px;
  border: 1px solid #e7e7e7;
  font-size: 16px;
  color: #9e9e9e;
}

.form-button {
  padding: 15px 50px;
  color: #fff;
  background: #0dba00;
  border-radius: 50px;
  font-weight: bolder;
  font-size: 17px;
  border: 1px solid transparent;
  max-height: 56px;

  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: lighten(#0dba00, 5%);
  }
}

.input-button-group {
  position: relative;
  width: 100%;
  display: flex;
  max-width: 550px;
  margin: 0 auto;

  input {
    flex: 1;
    padding-right: 210px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    input {
      padding-right: 30px;
    }

    button {
      position: static;
      margin-top: 10px;
    }
  }
}

.flex {
  flex: 1;
}

.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 150px;

  img {
    width: 150px;
    max-width: 100%;
    height: auto;
  }
}

.language-select {
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  padding: 0 20px 0 10px;
  border-radius: 10px;
  height: 35px;
  width: 140px;
}
.notifications {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 12px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  background: #0dba00;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  font-weight: normal;
}

.VueCarousel {
  &-navigation-button {
    font-size: 0px;
    outline: none !important;
    &::after {
      content: "";
      display: block;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 30px;
      height: 30px;
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(306deg)
        brightness(103%) contrast(101%);
      outline: none;
    }
  }
  &-navigation {
    &-prev {
      &::after {
        background-image: url("/icons/left-outline-arrow.svg");
      }
    }
    &-next {
      &::after {
        background-image: url("/icons/right-outline-arrow.svg");
      }
    }
  }
  &-dot {
    padding: 0 4px !important;
    background-color: #b2b2b2 !important;
    &--active {
      background-color: #0a6aa8 !important;
    }
  }
}

.button {
  padding: 5px 30px;
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  background-color: #0dba00;
  border: 1px solid transparent;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
  &-block {
    padding: 15px 10px;
    border-radius: 10px;
    font-size: 18px;
  }
  &:hover {
    background-color: lighten(#0dba00, 5%);
  }

  &:focus {
    outline: none;
  }

  &--outlined {
    border-color: #0dba00;
    color: #0dba00;
    background-color: transparent;
    font-weight: lighter;
    &:hover {
      background-color: #0dba00;
      color: #fff;
      border-color: #fff;
    }
  }

  &-block {
    display: block;
    width: 100%;
  }
}

svg {
  display: block;
  margin: 0 auto;
}

select.select {
  padding: 10px 25px 10px 10px;
  background-color: #f6f6f6;
  border: 1px solid #d5d5d5;
  color: #8e8e8e;
  border-radius: 50px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
