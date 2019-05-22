<template>
  <nav class="nav" v-if="!isMobile">
    <div class="container">
      <div class="nav__container">
        <div class="logo-container">
          <router-link to="/">
            <img src="/images/logo.png" alt="Логотип" title="Exploray">
          </router-link>
        </div>
        <div class="nav__menu">
          <navbar-menu
            :items="{
                        '/tours': 'Путешествия',
                        '/about': 'О компании',
                        '/contact': 'Контакты',    
                    }"
          ></navbar-menu>
        </div>
        <div class="nav__info">
          <div class="nav__social">
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
            ></social-list>
          </div>
          <div class="nav__search-wrapper">
            <navbar-search/>
          </div>
          <div class="nav__buttons-wrapper">
            <div class="nav__buttons">
              <a href="/cart" class="nav__compare">
                <img src="/images/compare.png" height="20px" width="auto">
              </a>
              <a href="/cart" class="nav__cart">
                <span
                  v-if="!!$store.getters.cart.length"
                  class="notifications"
                >{{$store.getters.cart.length}}</span>
                <img src="/images/cart.png" height="24px" width="auto">
              </a>
              <router-link to="/login" class="nav__user">
                <img
                  :src="isProfilePage ? '/images/customer_filled.png' : '/images/customer.png'"
                  height="24px"
                  width="auto"
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <mobile-navbar v-else :isHomePage="isHomePage"/>
</template>

<script>
import NavbarMenu from "./NavbarMenu.vue";
import NavbarSearch from "./NavbarSearch.vue";
import MobileNavbarVue from "./MobileNavbar.vue";
export default {
  name: "navbar",
  components: {
    NavbarMenu,
    NavbarSearch,
    "mobile-navbar": MobileNavbarVue
  },
  data() {
    return {
      isMobile: false,
      isHomePage: false,
      isProfilePage: false
    };
  },
  methods: {
    changeDevice(width) {
      if (width <= 1200) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  },
  created() {
    this.changeDevice(window.innerWidth);
    this.isHomePage = this.$route.name !== "tours";
    this.isProfilePage = this.$route.name === "profile";
  },
  watch: {
    $route(to) {
      this.isHomePage = to.name !== "tours";
      this.isProfilePage = to.name === "profile";
    }
  }
};
</script>

<style lang="scss">
.nav {
  background-color: #0a6aa8;
  max-height: 100px;

  &__buttons-wrapper,
  &__search-wrapper,
  &__menu,
  &__social {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__buttons {
    display: flex;
    flex-direction: row;

    > a {
      &:not(:last-child) {
        margin-right: 20px;
      }
      color: #fff;
      height: 25px;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      &.nav__compare {
        margin-right: 15px;
        img {
          margin-top: 2px;
        }
      }

      img {
        width: auto;
      }

      i {
        font-size: 20px;
      }
    }
  }

  &__menu {
    flex: 1;
    max-width: 340px;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .logo-container {
      @media screen and (max-width: 1024px) {
        max-width: 130px;
        padding: 10px 0;
        a {
          img {
            max-width: 130px;
          }
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>