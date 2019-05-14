<template>
  <nav class="nav">
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
            <navbar-search />
          </div>
          <div class="nav__buttons-wrapper">
            <div class="nav__buttons">
              <a href="/cart" class="nav__compare">
                <img src="/images/compare.png" height="20px" width="auto" />
              </a>
              <a href="/cart" class="nav__cart">
                <span v-if="!!$store.getters.cart.length" class="notifications">
                  {{$store.getters.cart.length}}
                </span>
                <img src="/images/cart.png" height="24px" width="auto" />
              </a>
              <a href="/cart" class="nav__user">
                <img :src="isProfilePage ? '/images/customer_filled.png' : '/images/customer.png'" height="24px" width="auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarMenu from "./NavbarMenu.vue";
import NavbarSearch from "./NavbarSearch.vue";
export default {
  name: "navbar",
  components: {
    NavbarMenu,
    NavbarSearch
  },
  props: {
    isProfilePage: Boolean
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
      position: static;

      img {
        width: auto;
      }

      i {
        font-size: 20px;
      }
    }
  }

  &__compare {
    margin-right: 15px;
    img {
      margin-top: 2px;
    }
  }

  &__menu {
    flex: 1;
    max-width: 340px;
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-direction: row;
  }

}
</style>