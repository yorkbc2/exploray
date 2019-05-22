<template>
  <div class="profile-wrapper profile-data-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="profile-card without-changes">
            <div class="sm profile-avatar">
              <img :src="'/images/avatar.png'">
              <div class="profile-online-status active">
                <span>Онлайн</span>
              </div>
              <div class="profile-online-status">
                <span>Оффлайн</span>
                <small>(в сети 2 часа назад)</small>
              </div>
            </div>
            <div class="profile-data">
              <div class="d-flex justify-content-between profile-data-header">
                <h3>Галицин Ярослав Андреевич</h3>
                <span class="profile-type">Частное лицо</span>
                <router-link to="/profile-edit" class="button profile-edit-button">
                  <i class="fas fa-pencil-alt"></i>&nbsp;Редактировать профиль
                </router-link>
              </div>
              <h4>Краткие сведения</h4>
              <ul class="profile-about-list">
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  Город:
                  <span>Санкт-Петербург, Россия</span>
                </li>
                <li>
                  <i class="far fa-calendar"></i>
                  Дата рождения:
                  <span>20.04.1990г.</span>
                </li>
                <li>
                  <i class="fas fa-medal"></i>
                  Грэйд:
                  <span>Путешественник</span>
                </li>
              </ul>
              <h4>О себе:</h4>
              <p>Повседневная практика показывает, что рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и реализации дальнейших направлений развития. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации соответствующий условий активизации.</p>
              <div class="profile-data-button-wrapper">
                <router-link
                  to="/profile-edit"
                  class="button profile-edit-button profile-edit-button--mobile"
                >
                  <i class="fas fa-pencil-alt"></i>&nbsp;Редактировать профиль
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="profile-card profile-navigation">
            <div class="profile-card__head">
              <h4>Навигация</h4>
            </div>
            <div class="profile-card__body">
              <profile-navigation/>
            </div>
          </div>
        </div>
        <div class="col-md-9 profile-info-column">
          <div class="row">
            <div class="col-md-6">
              <div class="profile-card">
                <div class="profile-card__head">
                  <h5 class="profile-card-toggler">
                    Контакты
                    <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
                  </h5>
                </div>
                <div class="profile-card__body profile-card-content">
                  <div class="d-flex justify-content-between profile-phones">
                    <a href="#">
                      <strong>
                        <i class="fa fa-phone"></i> +7 (906) 123-45-67
                      </strong>
                    </a>
                    <a href="#">
                      <strong>
                        <i class="fa fa-phone"></i> +7 (906) 123-45-67
                      </strong>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="profile-email">
                      <i class="fa fa-envelope"></i>&nbsp;galitsin@gmail.com
                    </a>
                  </div>
                  <h4>Мессенджеры</h4>
                  <div>
                    <ul class="messenger-list">
                      <li>
                        <a href="#">
                          <img src="/images/tg.png" alt>
                          @galitsinYarick
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/wapp.png" alt>
                          +7 (966) 155-55-55
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/viber.png" alt>
                          +7 (966) 155-55-55
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/skype.png" alt>
                          galitsin_yar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-card">
                <div class="profile-card__head">
                  <h5 class="profile-card-toggler">
                    Образование
                    <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
                  </h5>
                </div>
                <div class="profile-card__body profile-card-content">
                  <div class="profile-grade">
                    <h5>
                      Машиностроительный колледж ЗНТУ
                      <small>Електромеханик</small>
                    </h5>
                    <div class="profile-grade__dates">
                      <span>с сен. 2011г.</span>
                      <span>по июн. 2015г.</span>
                    </div>
                  </div>
                  <div class="profile-grade">
                    <h5>
                      Машиностроительный колледж ЗНТУ
                      <small>Електромеханик</small>
                    </h5>
                    <div class="profile-grade__dates">
                      <span>с сен. 2011г.</span>
                      <span>по июн. 2015г.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="profile-card">
                <div class="profile-card__head">
                  <h5 class="profile-card-toggler">
                    Социальные сети
                    <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
                  </h5>
                </div>
                <div class="profile-card__body profile-card-content">
                  <div class="profile-socials">
                    <span>
                      <img src="/images/i_is.png" alt>
                      Instagram
                    </span>
                    <span>
                      <img src="/images/i_yt.png" alt>
                      YouTube
                    </span>
                    <span>
                      <img src="/images/i_fb.png" alt>
                      Facebook
                    </span>
                    <span>
                      <img src="/images/i_vk.png" alt>
                      Вконтакте
                    </span>
                    <span>
                      <img src="/images/i_ok.png" alt>
                      Одноклассники
                    </span>
                    <span>
                      <img src="/images/i_pt.png" alt>
                      Pinterest
                    </span>
                    <span>
                      <img src="/images/i_tw.png" alt>
                      Twitter
                    </span>
                    <span>
                      <img src="/images/i_tmblr.png" alt>
                      Tumblr
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-card">
                <div class="profile-card__head">
                  <h5 class="profile-card-toggler">
                    Навыки
                    <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
                  </h5>
                </div>
                <div class="profile-card__body profile-card-content">
                  <ul class="profile-skills">
                    <li>Создание рекламных кампаний</li>
                    <li>Разработка рекламной концепции</li>
                    <li>Microsoft Excel 2019</li>
                    <li>Microsoft Power Point 2019</li>
                    <li>Adobe Photoshop CC 2019</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="profile-card">
                <div class="profile-card__head">
                  <h5 class="profile-card-toggler">
                    Языки
                    <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
                  </h5>
                </div>
                <div class="profile-card__body profile-card-content">
                  <div class="profile-lang">
                    <span>
                      <img src="/images/eng.png" alt>
                      English
                    </span>
                    <span>
                      <img src="/images/ru.png" alt>
                      Русский
                    </span>
                    <span>
                      <img src="/images/ua.png" alt>
                      Украинский
                    </span>
                    <span>
                      <img src="/images/pl.png" alt>
                      Польский
                    </span>
                    <span>
                      <img src="/images/de.png" alt>
                      Немецкий
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileNavigationVue from "@/components/Lists/ProfileNavigationList.vue";
import { mobileCardToggler } from "@/utils/card-toggler.js";
export default {
  components: {
    "profile-navigation": ProfileNavigationVue
  },
  mounted() {
    mobileCardToggler(".profile-card");
  }
};
</script>

<style lang="scss">
.profile-wrapper.profile-data-wrapper {
  padding-bottom: 25px;

  .profile-info-column {
    .col-md-6 {
      margin-bottom: 20px;
    }
    .profile-card {
      min-height: 100%;
      margin-bottom: 0px;
    }
  }

  .profile-card {
    &:not(.without-changes) {
      padding: 0px;

      flex-direction: column;
    }

    h4 {
      font-size: 14px;
      padding: 0;
      color: #969696;
      margin: 15px 0;
    }

    .profile-card__head {
      padding: 15px 20px 8px;
      position: relative;
      @media screen and (min-width: 768px) {
        max-height: 45px;
      }
      @media screen and (max-width: 767px) {
        padding-bottom: 0px;
      }
      h4,
      h5 {
        font-size: 16px;
        color: #969696;
        padding: 0;
        margin: 0;
        &.profile-card-toggler {
          @media screen and (max-width: 767px) {
            margin-bottom: 15px;
            &.toggled {
              &::after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: #ebebeb;
                left: 0;
                bottom: -15px;
                position: absolute;
              }
            }
          }
        }
      }
      &::before {
        content: "";
        position: absolute;
        left: 20px;
        height: 3px;
        width: 50px;
        background-color: #0a6aa8;
        top: 0px;
      }
    }
    .profile-card__body {
      padding: 5px 20px 15px;
      a {
        color: #000;
        font-size: 16px;
        text-decoration: none;

        i.fa {
          font-size: 18px;
          vertical-align: middle;
          margin-right: 7px;
        }
      }
      @media screen and (max-width: 1024px) {
        a {
          font-size: 13px;
          i.fa {
            font-size: 15px;
            margin-right: 4px;
          }
        }
      }
      @media screen and (max-width: 767px) {
        &.profile-card-content {
          padding-top: 10px;
        }

        .profile-phones > a,
        .profile-email {
          font-size: 15px;
        }
      }
    }
  }

  .profile-skills {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: block;
      margin-bottom: 10px;
      padding-left: 25px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: #0a6aa8;
        border-radius: 50%;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
      }
    }

    @media screen and (max-width: 767px) {
      li {
        font-size: 14px;
        padding-left: 20px;
        &::before {
          width: 12px;
          height: 12px;
        }
      }
    }
  }

  .profile-lang {
    span {
      display: block;
      margin-bottom: 5px;

      img {
        margin-right: 6px;
      }
    }
  }

  .profile-navigation {
    .profile-card__body {
      padding: 0;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .profile-data {
    padding: 12px 15px 12px 20px;
    @media screen and (max-width: 767px) {
      padding: 170px 0px 12px;
    }
    .profile-data-header {
      @media screen and (max-width: 1024px) {
        .profile-edit-button {
          &:not(.profile-edit-button--mobile) {
            display: none;
          }
        }
        h3 {
          font-size: 20px;
        }
        .profile-type {
          max-height: 30px;
          padding: 0px 10px;
        }
      }
      @media screen and (max-width: 767px) {
        flex-direction: column;

        h3 {
          text-align: center;
          margin-bottom: 15px;
          font-size: 17px;
        }

        .profile-type {
          align-self: center;
          text-align: center;
          max-width: 130px;
          padding: 5px 12px;
          margin-bottom: 5px;
          font-size: 12px;
        }
      }
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
    }

    .profile-about-list {
      display: flex;
      margin: 0;
      padding: 0;

      justify-content: space-between;

      li {
        flex: 1;
        list-style: none;
        text-align: center;

        color: #858585;
        font-size: 14px;

        i {
          color: #0a6aa8;
          margin-right: 4px;
          font-size: 16px;
        }

        span {
          color: #000;
        }

        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }

      @media screen and (max-width: 1024px) {
        flex-direction: column;

        > li {
          margin-bottom: 10px;
          &,
          &:last-child {
            text-align: left;
          }
        }
      }
    }

    .profile-type {
      vertical-align: middle;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      background: #0a6aa8;
      border-radius: 5px;
      color: #fff;
      max-height: 34px;
      font-size: 14px;
      padding: 2px 16px;
    }

    a.button.profile-edit-button {
      font-weight: normal;
      font-size: 14px;
      color: #000;
      padding: 8px 17px;
      background-color: #ebebeb;
      border: 1px solid #e1e1e1;

      i {
        margin-right: 5px;
      }
    }

    .profile-data-button-wrapper {
      display: none;
      @media screen and (max-width: 1024px) {
        text-align: right;
        display: block;
      }
      @media screen and (max-width: 767px) {
        text-align: center;
      }
    }

    > h4 {
      @media screen and (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  .profile-grade {
    &:not(:last-child) {
      padding-bottom: 10px;
      border-bottom: 1px solid #e1e1e1;
      margin-bottom: 10px;
    }
    h5 {
      margin-bottom: 6px;

      font-weight: bold;

      small {
        display: block;
        font-size: 14px;
        margin-top: 10px;
        color: #6a6a6a;
      }
    }
    &__dates {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      span {
        font-size: 14px;
        color: #a2a2a2;
        flex: 1;
        position: relative;

        &:last-child {
          text-align: right;
        }

        &:not(:last-child) {
          &::after {
            content: "";
            width: 24px;
            height: 3px;
            position: absolute;
            display: block;
            background-color: #898989;
            top: 50%;
            right: 0px;
            transform: translateX(50%) translateY(-50%);
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      h5 {
        font-size: 14px;
        margin-bottom: 0px;
        small {
          margin-top: 4px;
        }
      }
    }
  }

  .profile-phones {
    margin-bottom: 5px;
    @media screen and (max-width: 767px) {
      flex-direction: column !important;

      a {
        &:first-child {
          margin-bottom: 8px;
        }
      }
    }
  }

  .profile-socials {
    @media screen and (max-width: 767px) {
      span {
        display: block;
        margin-bottom: 6px;
      }
    }
  }
}

.profile-online-status {
  &.active {
    span {
      &::before {
        background-color: #0dba00;
      }
    }
  }
  span {
    position: relative;

    padding-left: 20px;
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #b7b7b7;
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
    }
  }
  small {
    display: block;
    font-size: 12px;
    color: #858585;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
}

.messenger-list {
  margin: 0;
  padding: 0;

  li {
    list-style: none;

    display: inline-block;
    @media screen and (max-width: 767px) {
      display: block;
      margin-bottom: 8px;
    }

    margin-right: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 1024px) {
      margin-right: 15px;
    }

    a {
      font-weight: 600;
      color: #5c5c5c !important;
    }

    img {
      width: 21px;
      height: 21px;
      margin-right: 3px;
    }
  }
}
</style>

