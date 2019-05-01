<template>
  <div class="mobile-navbar">
    <div class="mobile-navbar-header">
      <router-link to="/">
        <img src="/images/mobile-logo.png" alt title="Exploray" class="logo" v-if="!isOpened">
      </router-link>
      <button class="call-filters" v-if="!isHomePage && !isOpened" @click="toggleFilters">
        <img src="/images/filters.png" alt>
      </button>
      <div class="mobile-navbar__search" v-if="!isOpened">
        <navbar-search/>
      </div>
      <div class="mobile-navbar__social-list" v-if="!isOpened">
        <social-list
          :items="[
              {
                  name: 'vk',
                  url: 'https://facebook.com'
              },
              {
                  name: 'instagram',
                  url: 'https://facebook.com'
              },
              {
                  name: 'facebook',
                  url: 'https://facebook.com'
              }
          ]"
        />
      </div>
      <button :class="{hamburger: true, active: isOpened}" @click="toggle()">
        <i class="hamburger-inner"/>
      </button>
    </div>
    <div :class="{'mobile-navbar-menu':true, active: isOpened}">
        <navbar-search />
      <ul class="mobile-navbar-menu-inner">
        <li>
          <router-link to="/tours">Путешествия</router-link>
        </li>
        <li>
          <router-link to="/tours">О проекте</router-link>
        </li>
        <li>
          <router-link to="/tours">Контакты</router-link>
        </li>
        <li>
          <router-link to="/tours">
            Корзина
            <span
              class="cart-length"
              v-if="!!$store.getters.cart.length"
            >{{ $store.getters.cart.length }}</span>
          </router-link>
        </li>
        <li>
          <a href="#">Личный кабинет</a>
        </li>
      </ul>
      <div class="text-center social-list-wrapper">
        <social-list
          :items="[
            {
                name: 'vk',
                url: 'https://vk.com'
            },{
                name: 'instagram',
                url: 'https://instagram.com'
            },{
                name: 'facebook',
                url: 'https://facebook.com'
            }
        ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSearch from "./NavbarSearch.vue";
export default {
  name: "mobile-navbar",
  props: {
    isHomePage: Boolean
  },
  components: {
    NavbarSearch
  },
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
    },
    toggleFilters() {
      this.$store.commit("TOGGLE_FILTERS");
    }
  },
  watch: {
    $route() {
      this.isOpened = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-navbar {
  &__search,
  &__social-list {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &-header {
    position: fixed;
    top: 0px;
    left: 0px;

    width: 100%;
    padding: 10px;

    z-index: 100;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 62px;

    background-color: #0a6aa8;

    .hamburger {
      border: 0px;
      background-color: transparent;
      outline: none;

      &-inner {
        position: relative;
        width: 33px;
        height: 3px;
        background-color: #fff;
        display: block;
        transition: transform 0.3s ease-in-out;

        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 33px;
          height: 3px;
          background-color: #fff;
          left: 0px;
          transition: transform 0.3s ease-in-out;
        }

        &::before {
          top: -10px;
        }

        &::after {
          top: 10px;
        }
      }

      &.active {
        .hamburger-inner {
          &::after {
            display: none;
          }
          &::before {
            top: 0px;
            transform: rotate(90deg);
          }
          transform: rotate(-45deg);
        }
      }
    }

    .logo {
      width: 40px;
      height: auto;
    }
  }

  &-menu {
    position: fixed;
    top: -100%;
    left: 0px;
    width: 100%;
    padding: 15px 15px 30px;
    background-color: #0a6aa8;
    z-index: 99;
    transition: top 0.3s ease-in-out;
    text-align: center;

    .nav__search {
        margin: 0 auto 15px; 
    }

    &.active {
      top: 62px;
    }

    .social-list-wrapper {
      margin-top: 10px;
    }

    &-inner {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        display: block;
        text-align: center;
        margin-bottom: 10px;
        a {
          position: relative;
          color: #fff;
          display: inline-block;

          .cart-length {
            position: absolute;
            width: 18px;
            height: 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 50%;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #0dba00;
          }
        }
      }
    }
  }

  .call-filters {
    background-color: transparent;
    border: 0px;
    padding: 0px;
    box-shadow: none;
    outline: none;

    position: absolute;
    left: 80px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

