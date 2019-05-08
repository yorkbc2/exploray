<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-between footer__row">
        <div class="col-md-7">
          <div class="d-flex flex-row justify-content-between">
            <div class="logo-container">
              <router-link to="/">
                <img src="/images/logo.png" alt="Логотип" title="Exploray">
              </router-link>
            </div>
            <div class="footer__menu">
              <navbar-menu
                :items="{
                        '/adventures': 'Путешествия',
                        '/about': 'О компании',
                        '/contact': 'Контакты',    
                    }"
              />
            </div>
          </div>

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
          <div class="footer__language mobile-select">
            <advanced-select
              :options="[
                  {
                    value: 'Русский'
                  },
                  {
                    value: 'English'
                  },
                  {
                    value: 'Украинский'
                  }
                ]"
              :top="true"
            />
          </div>
          <div class="footer__links">
            <ul>
              <li>
                <a href="#">Правила пользования</a>
              </li>
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">Партнерская программа</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-5 col-xs-12 footer__contact">
          <div class="footer__contact-list">
            <a href="#" class="link-with-icon footer__contact-list-phone">
              <i class="fa fa-phone"></i>
              +7 (906) 123-45-67
            </a>
            <a href="#" class="link-with-icon">
              <i class="fa fa-envelope"></i>
              office@meridians.de
            </a>
          </div>
          <div class="footer__contact-address">
            <p>
              БЦ "Аврора" 004109,
              <br>Санкт-Петербург, Россия
            </p>
            <div class="footer__language">
              <advanced-select
                :options="[
                  {
                    value: 'Русский'
                  },
                  {
                    value: 'English'
                  },
                  {
                    value: 'Украинский'
                  }
                ]"
                :top="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">Все права защищены. {{(new Date()).getFullYear()}}.</div>
  </footer>
</template>

<script>
import NavbarMenu from "./../Navbar/NavbarMenu.vue";
export default {
  name: "app-footer",
  components: {
    NavbarMenu
  },
  computed: {
    isTablet: () => window.innerWidth <= 1024 && window.innerWidth >= 768,
    isMobile: () => window.innerWidth <= 767,
  }
};
</script>

<style lang="scss">
.footer {
  position: relative;
  background-color: #0a6aa8;
  padding-bottom: 55px;
  padding-top: 25px;

  .logo-container {
    width: 200px;
    max-width: 200px;
    margin-bottom: 30px;
    img {
      max-width: 200px;
    }
  }

  &__menu {
    max-width: 340px;
    > ul {
      li {
        > a {
          padding: 20px 0;
          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
  .d-flex {
    > div {
      flex: 1;
    }
  }

  .social-list {
    @media screen and (min-width: 1025px) {
      display: none;
    }
    li:first-child {
      margin-left: 0px;
    }
  }

  &__links {
    margin-top: 15px;
    ul {
      margin: 0;
      padding: 0;

      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        flex: none;
        a {
          color: #a7ddff;
          text-decoration: none;
          font-size: 14px;
        }
      }
    }
  }
  &__contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 0px;
    max-width: 450px;
    &-list,
    &-address {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    a {
      color: #fff;
      font-size: 16px;
      text-decoration: none;
      i {
        margin-right: 7px;
        font-size: 18px;
      }
    }
    p {
      color: #fff;
      font-size: 14px;
      margin-bottom: 0px;
    }
  }
  &__copyright {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #6eabd7;
  }
  .mobile-select {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    padding-top: 0px;
    .footer__copyright {
      font-size: 12px;
      width: 100%;
    }
    .mobile-select {
      display: inline-block;
    }
    .footer__language:not(.mobile-select) {
      display: none;
    }
    .footer__row {
      flex-direction: column-reverse;

      > div {
        width: 100%;
        max-width: 100%;
      }
    }
    .logo-container,
    .footer__menu {
      display: none;
    }

    .footer__contact {
      flex-direction: column;
      &-list,
      &-address {
        flex-direction: column;
      }
      &-list {
        a {
          margin-bottom: 5px;
        }
        margin-bottom: 5px;
      }
      &-list-phone {
        font-size: 18px;
      }
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }

    .social-list {
      margin-bottom: 10px;
    }

    .footer__links {
      ul {
        flex-direction: column;
      }
    }
  }
}
</style>
