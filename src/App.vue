<template>
  <div id="app">
    <navbar />
    <transition :name="isAnimated ? 'fade': ''" mode="out-in">
      <router-view/>
    </transition>
    <scroll-to-top/>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import ScrollToTop from "@/components/ActionButtons/ScrollToTop.vue";
import store from "./store/index.js";
export default {
  store,
  components: {
    Navbar,
    "app-footer": Footer,
    ScrollToTop
  },
  data() {
    return {
      isAnimated: false
    };
  },
  watch: {
    $route(to) {
      this.isAnimated = to.name === 'login' || to.name === 'register';
    }
  }
};
</script>


<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;

  a {
    color: #0dba00;
    text-decoration: underline;
    &:hover {
      color: lighten(#0dba0d, 5%);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@keyframes customFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.block-line {
  background-color: #0a6aa8;
  padding: 25px 0;
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media screen and (max-width: 1024px) {
      max-width: 50%;
      flex: 1;
      text-align: center;
      flex-direction: column;
      margin-left: auto;

      .advanced-select,
      .intro-slider-line__links {
        margin: 0 auto 15px;
      }
    }
    @media screen and (max-width: 767px) {
      max-width: 100%;
    }
  }

  a {
    color: #fff;
    font-weight: lighter;
    font-size: 14px;
    &:hover {
      color: darken(#fff, 5%);
    }
  }
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

    &--uppercased {
      padding-bottom: 25px;
      margin-bottom: 25px;
      text-transform: uppercase;
      &::after {
        height: 1px;
        width: 36px;
      }
    }

    &--lighter {
      font-weight: 500;
      padding-bottom: 25px;
      margin-bottom: 25px;
      span {
        color: #af2727;
      }
      &::after {
        width: 32px;
      }
    }

    &--left {
      text-align: left;

      &::after {
        left: 0px;
        transform: none;
      }
    }
  }

  .section__subtitle {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 30px;
  }

  &.section {
    &--colored {
      background: #f6f6f6;
    }

    &--with-header {
      .section__header {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        padding: 50px 0 120px;

        .section__title {
          color: #fff;
          &::after {
            background-color: #fff;
          }
        }
      }

      .section__content {
        transform: translateY(-100px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0;
    .section__title {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 560px) {
    .section__title {
      &--left {
        font-size: 20px;
      }
    }
  }
}

.input {
  padding: 15px 30px;
  border-radius: 50px;
  border: 1px solid #e7e7e7;
  font-size: 16px;
  color: #9e9e9e;

  &--block {
    width: 100%;
    flex: 1;
    display: block;
  }
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

  @media screen and (max-width: 767px) {
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
  max-width: 200px;
  margin-right: 15px;

  @media screen and (max-width: 1200px) {
    max-width: 125px;
  }

  img {
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
  option {
    color: #000;
  }
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
    z-index: 1000;
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

.button,
a.button {
  display: inline-block;
  padding: 5px 30px;
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  background-color: #0dba00;
  border: 1px solid transparent;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: lighten(#0dba00, 5%);
    color: #fff;
    text-decoration: none;
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

  &--rect {
    border-radius: 15px;

    @media screen and (max-width: 768px) {
      border-radius: 50px;
    }
  }

  &--large {
    padding: 12px 70px;
    font-size: 18px;
  }

  &--wide {
    padding: 8px 60px;
    @media screen and (max-width: 768px) {
      padding: 8px 35px;
      max-width: 200px;
    }
  }

  &-white {
    border-color: #fff;
    color: #fff;
    &:hover {
      color: #000;
      background-color: #fff;
      border-color: #fff;
    }
  }

  &-block {
    display: block;
    width: 100%;
    padding: 15px 10px;
    border-radius: 10px;
    font-size: 18px;
  }

  &--small-paddings {
    padding: 12px 40px;
  }

  &-download {
    font-weight: normal;
    padding: 12px 40px;

    img {
      vertical-align: middle;
      height: 22px;
      margin-left: 7px;
    }
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

.container {
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 95%;
  }
}

.big-text {
  font-size: 32px;
}

.default-badge {
  font-weight: lighter;
  background-color: #0a6aa8;
  color: #fff;
  padding: 3px 13px;
}

ul.check-list {
  margin: 0;
  padding: 0;

  li {
    position: relative;
    list-style: none;
    padding-left: 35px;
    margin-bottom: 25px;
    font-weight: 300;

    &::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 20px;
      height: 20px;
      background-image: url("/images/check-blue.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &--red {
    li {
      &::before {
        background-image: url("/images/check-red.png");
      }
    }
  }
}

.splitted-bottom {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e7e7e7;
}

img {
  max-width: 100%;
}

.inline-list {
  display: flex;
  margin: 0 0 15px;
  padding: 0;

  li {
    position: relative;
    list-style: none;
    display: inline-block;
    padding-left: 15px;
    margin-right: 15px;
    &::before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #0a6aa8;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    li {
      margin-bottom: 10px;
      color: #000;
    }
  }
}

.mobile-hide {
  @media screen and (max-width: 560px) {
    display: none !important;
  }
}

button,
a,
input {
  outline: none !important;
}

*.no-underline {
  text-decoration: none;
}

*.grey {
  color: #707070;
}

.default-form {
  text-align: center;
  margin: 0px 20px;
  @media screen and (max-width: 767px) {
    margin: 0px 0px;
  }
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &.between {
      justify-content: space-between;

      > div.input-container {
        > input {
          margin: 0px;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      > div.input-container {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }
    }

    &:last-child {
      margin-top: 30px;
      @media screen and (max-width: 767px) {
        margin-top: 20px;
      }
    }

    > strong {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 15px;
      margin-bottom: 15px;
    }

    .input-container {
      margin-right: 15px;

      &:last-child {
        margin-right: auto;
      }
    }
  }

  &--without-last {
    .default-form__row {
      &:last-child {
        margin-top: 0px;
        @media screen and (max-width: 767px) {
          margin-top: 0px;
        }
      }
    }
  }

  &__checkbox {
    margin: 10px 0 0px;
    @media screen and (max-width: 767px) {
      margin: 0px 0px 0px;
    }
  }

  button[type="submit"] {
    width: 100%;
    margin: 0 25px;
    max-width: 310px;

    @media screen and (max-width: 1024px) {
      margin: 0px;
    }
  }

  input.input {
    max-width: 350px;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      width: 100%;
      max-width: 100%;
    }

    @media screen and (max-width: 767px) {
      padding: 15px 20px;
    }
  }

  &--wide {
    input.input {
      max-width: 100%;
    }
  }
}

.input-warning {
  color: red;
  margin-top: 5px;
  font-size: 14px;
  margin-bottom: 0px;
}

.textarea-container {
  textarea {
    width: 100%;
    min-height: 200px;
    border-radius: 30px;
    background-color: #f6f6f6;
    border: 1px solid #ebebeb;
    padding: 20px 30px;
    font-size: 14px;
    line-height: 170%;
    outline: none;
    @media screen and (max-width: 1024px) {
      min-height: 275px;
    }
    @media screen and (max-width: 767px) {
      min-height: 175px;
    }
  }
}

.default-advanced-select {
  flex: 1;
  .advanced-select {
    width: 100%;
    .advanced-select__current {
      padding: 15px 30px;
      border-radius: 50px;
      background-color: #f6f6f6;
      border: 1px solid #ebebeb;
      text-align: left;
      color: #646464;
      svg {
        right: 20px;
        fill: #000 !important;
      }
      @media screen and (max-width: 767px) {
        padding: 15px 30px 15px 15px;
        svg {
          right: 15px;
        }
      }
    }

    .advanced-select__dropdown {
      border-radius: 0px 0px 30px 30px;

      background-color: #f6f6f6;

      li {
        border-bottom: 0px;
        border-top: 0px;
        text-align: left;
        padding: 10px 30px;
      }
    }

    &.toggled {
      .advanced-select__current {
        border-radius: 30px 30px 0 0;
      }
    }
  }
}
</style>
