<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-between">
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
          <div class="footer__links">
            <ul class="d-flex">
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
        <div class="col-md-5 d-flex justify-content-between flex-column footer__contact">
          <div class="d-flex flex-row justify-content-between">
            <a href="#" class="link-with-icon">
              <i class="fa fa-phone"></i>
              +7 (906) 123-45-67
            </a>
            <a href="#" class="link-with-icon">
              <i class="fa fa-envelope"></i>
              office@@meridians.de
            </a>
          </div>
          <div class="d-flex flex-row justify-content-between">
            <p>
              БЦ "Аврора" 004109,
              <br>Санкт-Петербург, Россия
            </p>
            <select name="language" id="language" class="footer__language language-select">
              <option value="Русский" selected>Русский</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">Все права защищены. {{(new Date()).getFullYear()}}.</div>
  </footer>
</template>

<script>
import SocialList from "./../Lists/SocialList.vue";
import NavbarMenu from "./../Navbar/NavbarMenu.vue";
export default {
  name: "footer",
  components: {
    SocialList,
    NavbarMenu
  }
};
</script>

<style lang="scss">
.footer {
  position: relative;
  background-color: #0a6aa8;
  padding-bottom: 45px;
  padding-top: 25px;

  .logo-container {
    width: 200px;
    max-width: 200px;
    img {
      max-width: 150px;
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
    li:first-child {
      margin-left: 0px;
    }
  }

  &__links {
    margin-top: 15px;
    margin-bottom: 25px;
    ul {
      margin: 0;
      padding: 0;
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
    padding: 20px 20px 0px;
    max-width: 450px;
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
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #6eabd7;
  }
}
</style>
