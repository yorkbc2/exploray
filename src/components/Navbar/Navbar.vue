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
            <div class="nav__search">
              <input type="search" class="input" placeholder="Поиск тура">
              <icon name="search" />
            </div>
          </div>
          <div class="nav__buttons-wrapper">
            <div class="nav__buttons">
              <a href="/cart" class="nav__cart">
                <span v-if="false" class="notifications">2</span>
                <img src="/images/cart.png" height="24px" width="auto" />
              </a>
              <a href="/cart" class="nav__user">
                <img src="/images/customer.png" height="24px" width="auto" />
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
import SocialList from "./../Lists/SocialList.vue";
export default {
  name: "navbar",
  components: {
    NavbarMenu,
    SocialList
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
    > a {
      &:first-child {
        margin-right: 25px;
      }
      color: #fff;
      display: inline-block;
      position: relative;

      i {
        font-size: 20px;
      }
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

  &__search {
    position: relative;
    max-width: 200px;
    margin: 0 15px;

    input {
      width: 100%;
      padding: 10px 35px 10px 15px;
      font-size: 16px;
      border: 1px solid #fff;
      border-radius: 50px;
      background-color: transparent;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }

    svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%) scale(0.9);
    }
  }
}
</style>