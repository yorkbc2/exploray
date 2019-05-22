<template>
  <div class="profile-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="profile-card padding-right profile-about-card">
            <div class="sm profile-avatar">
              <img :src="isAvatar ? '/images/avatar.png' : '/images/avatar_404.png'">
              <div class="profile-links">
                <a href="#" @click="toggleAvatar()">
                  <img src="/images/camera.png" height="20px" width="auto">Загрузить фото
                </a>
                <a href="#">
                  <img src="/images/delete.png" height="18px" width="auto">Удалить фото
                </a>
              </div>
            </div>
            <div>
              <form class="default-form">
                <div class="default-form__row between profile-data">
                  <app-input name="name" type="text" label="Имя:" placeholder="Ярослав"/>
                  <app-input name="surname" type="text" label="Фамилия:" placeholder="Галицин"/>
                  <app-input
                    name="father_name"
                    type="text"
                    label="Отчество:"
                    placeholder="Андреевич"
                  />
                  <app-input name="name" type="text" label="Город:" placeholder="Санкт-Петербург"/>
                  <app-input name="surname" type="text" label="Страна:" placeholder="Россия"/>
                  <div class="input-container default-advanced-select">
                    <label class="input-label">Тип профиля:</label>
                    <advanced-select
                      class="default-form-advanced-select"
                      :options="[{ value: 'Частное лицо' }, { value: 'Компания' }]"
                      placeholder="Не выбрано"
                    />
                  </div>
                </div>
                <div class="default-form__row between"></div>
                <div class="default-form__row">
                  <app-multi-date label="Дата рождения:"/>
                </div>
                <div class="default-form__row">
                  <div class="input-container input-container--block textarea-container">
                    <label class="input-label input-label--between">
                      О себе:
                      <small>
                        Кол-во символов:
                        <i>{{ aboutLength }} из {{ aboutMaxLength }}</i>
                      </small>
                    </label>
                    <textarea ref="about" name="about" :maxlength="aboutMaxLength">Повседневная практика показывает, что рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и реализации дальнейших направлений развития. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации соответствующий условий активизации. 
                    </textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="profile-card">
            <div class="default-form default-form--without-last text-left">
              <h5 class="profile-card-toggler">
                Контакты
                <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
              </h5>
              <div class="profile-card-content">
                <div class="default-form__row">
                  <app-input
                    name="phone[]"
                    type="tel"
                    label="Телефон 1:"
                    placeholder="+7 (999) 123-45-67"
                  />
                  <app-input
                    name="phone[]"
                    type="tel"
                    label="Телефон 2:"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div class="default-form__row">
                  <app-input
                    name="email"
                    type="email"
                    label="E-mail адрес:"
                    :inline="true"
                    placeholder="example@test.com"
                  />
                </div>
                <h5>Мессенджеры</h5>
                <div class="default-form__row">
                  <app-input
                    name="telegram"
                    type="text"
                    label="Telegram:"
                    placeholder="@gailitsinYarick"
                  >
                    <template v-slot:icon>
                      <img
                        src="/images/tg.png"
                        width="20px"
                        height="20px"
                        alt="Telegram"
                        title="Telegram"
                      >
                    </template>
                  </app-input>
                  <app-input
                    name="whatsapp"
                    type="text"
                    label="WhatsApp:"
                    placeholder="+7 (906) 123-45-67"
                  >
                    <template v-slot:icon>
                      <img
                        src="/images/wapp.png"
                        width="20px"
                        height="20px"
                        alt="WhatsApp"
                        title="WhatsApp"
                      >
                    </template>
                  </app-input>
                </div>
                <div class="default-form__row">
                  <app-input name="skype" type="tel" label="Skype:" placeholder="galitsin_yar">
                    <template v-slot:icon>
                      <img
                        src="/images/skype.png"
                        width="20px"
                        height="20px"
                        alt="Skype"
                        title="Skype"
                      >
                    </template>
                  </app-input>
                  <app-input
                    name="viber"
                    type="tel"
                    label="Viber:"
                    placeholder="+7 (906) 123-45-67"
                  >
                    <template v-slot:icon>
                      <img
                        src="/images/viber.png"
                        width="20px"
                        height="20px"
                        alt="Viber"
                        title="Viber"
                      >
                    </template>
                  </app-input>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-card profile-card--splitted">
            <div class="profile-card-head">
              <h5 class="profile-card-toggler">
                Языки
                <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
              </h5>
            </div>
            <div class="profile-card-content">
              <div class="profile-card-body">
                <div class="d-flex flex-wrap">
                  <span class="language-label-item">
                    <img
                      src="/images/eng.png"
                      alt="English"
                      title="English"
                      height="20px"
                      width="auto"
                    >
                    English
                  </span>
                  <span class="language-label-item">
                    <img
                      src="/images/ru.png"
                      alt="Русский"
                      title="Русский"
                      height="20px"
                      width="auto"
                    >
                    Русский
                  </span>
                  <span class="language-label-item">
                    <img
                      src="/images/ua.png"
                      alt="Украинский"
                      title="Украинский"
                      height="20px"
                      width="auto"
                    >
                    Украинский
                  </span>
                </div>
              </div>
              <div class="profile-card-footer profile-language">
                <div class="default-advanced-select input-container">
                  <label class="input-label">Добавить язык:</label>
                  <advanced-select
                    placeholder="Не выбрано"
                    :options="[{value: 'Немецкий'}, { value: 'Польский'}]"
                  />
                </div>
                <div
                  class="flex d-flex flex-column justify-content-end profile-language__button-wrapper"
                >
                  <button type="button" class="button button-green button--large">Добавить</button>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="default-form text-left">
              <h5 class="profile-card-toggler">
                Подключить социальные сети
                <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
              </h5>
              <div class="profile-socials profile-card-content">
                <span
                  v-for="(item, index) in socials"
                  :key="index"
                  :class="{ checked: item.checked  }"
                >
                  <img :src="item.icon">
                  {{ item.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-card">
            <div class="default-form default-form--wide default-form--without-last text-left">
              <h5 class="profile-card-toggler">
                Образование
                <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
              </h5>
              <div class="profile-card-content">
                <div class="default-form__row">
                  <app-input
                    name="uni"
                    type="text"
                    label="Название учреждения:"
                    placeholder="Машиностроительный колледж ЗНТУ"
                  />
                </div>
                <div class="default-form__row">
                  <app-input
                    name="speciality"
                    type="text"
                    label="Специальность:"
                    placeholder="Електромеханик - инженер"
                  />
                </div>
                <div class="default-form-dates">
                  <div class="default-form__row">
                    <app-multi-date :inline="true" label="Дата поступления:" :hideDays="true"/>
                  </div>
                  <div class="default-form__row">
                    <app-multi-date :inline="true" label="Дата окончания:" :hideDays="true"/>
                  </div>
                </div>
                <div class="default-form__row justify-content-center">
                  <button
                    type="submit"
                    class="button button-green button--large button--small-paddings"
                  >Добавить образование</button>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="default-form default-form--wide default-form--without-last text-left">
              <h5 class="profile-card-toggler">
                Навыки
                <icon name="arrow-down" fill="#000" :width="17" :height="17"/>
              </h5>
              <div class="profile-card-content">
                <div class="default-form__row">
                  <app-input
                    type="text"
                    name="skills[]"
                    label="Краткое описание 1-го навыка:"
                    placeholder="Разработка рекламных кампаний"
                  />
                </div>
                <div class="default-form__row">
                  <app-input
                    type="text"
                    name="skills[]"
                    label="Краткое описание 2-го навыка:"
                    placeholder="Владение Photoshop CC"
                  />
                </div>

                <div class="default-form__row justify-content-center">
                  <button
                    type="submit"
                    class="button button-green button--large button--small-paddings"
                  >Добавить еще навык</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center profile-save-container">
          <button
            type="submit"
            class="button button-green button--large button--small-paddings"
          >Сохранить изменения</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputVue from "../components/Forms/Input.vue";
import InputMultiDateVue from "../components/Forms/InputMultiDate.vue";
import { mobileCardToggler } from "@/utils/card-toggler.js";
export default {
  components: {
    "app-input": InputVue,
    "app-multi-date": InputMultiDateVue
  },
  data() {
    return {
      aboutMaxLength: 450,
      aboutLength: 0,
      isAvatar: false,
      socials: [
        { label: "Instagram", icon: "/images/i_is.png", checked: true },
        { label: "YouTube", icon: "/images/i_yt.png" },
        { label: "Facebook", icon: "/images/i_fb.png" },
        { label: "ВКонтакте", icon: "/images/i_vk.png" },
        { label: "Одноклассники", icon: "/images/i_ok.png" },
        { label: "Pinterest", icon: "/images/i_pt.png" },
        { label: "Twitter", icon: "/images/i_tw.png" },
        { label: "Tumblr", icon: "/images/i_tmblr.png", checked: true }
      ]
    };
  },
  methods: {
    toggleAvatar() {
      this.isAvatar = !this.isAvatar;
    }
  },
  mounted() {
    this.aboutLength = this.$refs.about.value.length;
    this.$refs.about.addEventListener("input", e => {
      this.aboutLength = e.target.value.length;
    });
    mobileCardToggler(".profile-card");
  }
};
</script>


<style lang="scss">
.profile-wrapper {
  position: relative;
  padding: 90px 0 250px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 75px;
    padding-top: 160px;
  }

  .profile-card.profile-about-card {
    @media screen and (max-width: 767px) {
      padding-top: 190px;
    }
  }

  .profile-socials {
    span {
      display: inline-block;
      position: relative;
      margin-bottom: 15px;
      margin-right: 25px;
      img {
        vertical-align: top;
        width: 23px;
        height: auto;
        margin-right: 5px;
      }

      &.checked {
        color: #919191;
        padding-right: 25px;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0px;
          transform: translateY(-50%);
          background-image: url("/icons/check.svg ");
          width: 15px;
          height: 15px;
          background-size: cover;
          background-position: center;
          filter: invert(59%) sepia(13%) saturate(2096%) hue-rotate(73deg)
            brightness(88%) contrast(85%);
        }
      }
    }
  }

  .profile-avatar {
    @media screen and (max-width: 767px) {
      position: absolute;

      top: 0px;
      left: 50%;
      transform: translateY(-40px) translateX(-50%);
      max-width: 150px;
      .profile-links {
        margin-top: 10px;
        a {
          margin-bottom: 5px;
        }
      }
      > img {
        width: 150px;
        height: 150px;
        max-width: 150px;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 300px;
    width: 100%;
    z-index: -1;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    background-image: url("/images/profile_bg.jpg");

    @media screen and (max-width: 1024px) {
      height: 400px;
    }
  }

  .profile-save-container {
    margin-top: 40px;
  }

  .container {
    > .row {
      > div {
        @media screen and (max-width: 1024px) {
          width: 100%;
          flex: none;
          max-width: 100%;
        }
      }
    }
  }

  .profile-links {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    margin-top: 15px;

    @media screen and (max-width: 1024px) {
      padding-left: 10px;
    }

    > a {
      display: inline-block;
      color: #000;
      text-decoration: underline;
      font-size: 14px;
      margin-bottom: 10px;
      img {
        margin-right: 10px;
      }
    }
  }

  .profile-card {
    padding: 15px;
    border: 1px solid #e7e7e7;
    margin-bottom: 20px;
    background-color: #fff;
    width: 100%;
    position: relative;
    &.padding-right {
      padding-right: 90px;
      @media screen and (max-width: 1024px) {
        padding-right: 15px;
      }
    }
    display: flex;
    flex-direction: row;
    justify-content: center;

    border-radius: 10px;
    box-shadow: 2.5px 4.33px 5px 0px rgba(0, 0, 0, 0.2);

    h5 {
      position: relative;
      font-size: 16px;
      margin-bottom: 15px;
      &.profile-card-toggler {
        margin-bottom: 0px;
        padding: 10px 0px;

        &.toggled {
          svg {
            transform: translateY(-50%) scale(-1);
          }
        }
        svg {
          display: none;
          position: absolute;
          top: 50%;
          right: 0px;
          transform: translateY(-50%);
          @media screen and (max-width: 767px) {
            display: block;
          }
        }
      }
    }

    .default-form {
      &-dates {
        @media screen and (max-width: 1024px) and (min-width: 768px) {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          .default-form__row {
            flex: 1;
            &:first-child {
              margin-right: 10px;
            }
            .input-multi-date {
              .input-label {
                justify-content: flex-start;
                padding-top: 15px;
              }
              .default-advanced-select {
                flex-direction: column;

                .advanced-select {
                  margin-bottom: 10px;

                  &.years-select {
                    max-width: 110px;
                    margin-left: 15px;
                  }
                  &.months-select {
                    max-width: 140px;
                  }
                }
              }
            }
          }
        }
        @media screen and (max-width: 767px) {
          .default-advanced-select .months-select {
            max-width: 120px;
          }
        }
      }
      .default-form__row {
        justify-content: flex-start;
        flex-wrap: wrap;

        @media screen and (min-width: 768px) and (max-width: 1024px) {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        button.button {
          @media screen and (max-width: 1024px) {
            margin-top: 15px;
          }
        }

        &.profile-data {
          > .input-container {
            width: 240px;
            margin-right: 20px;
            max-width: 240px;
            flex: none;
            &:nth-child(3n + 3) {
              margin-right: 0px;
            }
          }

          @media screen and (max-width: 1200px) {
            > .input-container {
              max-width: 48%;
              width: 48%;
              &,
              &:nth-child(3n + 3) {
                margin-right: 15px;
              }

              &:nth-child(even) {
                margin-right: 0px;
              }
            }
          }

          @media screen and (max-width: 767px) {
            > .input-container {
              width: 100%;
              margin-right: 0px;
              max-width: 100%;

              &,
              &:nth-child(3n + 3) {
                margin-right: 0px;
              }
            }
          }
        }

        > .input-container {
          &--block {
            width: 100%;
            max-width: 100%;
          }

          input {
            text-align: left !important;

            color: #000;
            background-color: #f6f6f6;
            border: 1px solid #ebebeb;
          }

          &:last-child {
            margin-right: 0px;
          }

          @media screen and (min-width: 768px) and (max-width: 1024px) {
            margin: 0px 30px 0px 0px;
          }
        }
      }

      &--wide {
        .default-form__row {
          > .input-container {
            max-width: 100%;
          }
        }
      }
    }

    > div {
      flex: 1;

      &.sm {
        max-width: 200px;
        padding-right: 10px;
        @media screen and (max-width: 1024px) {
          max-width: 170px;
        }
      }
    }

    &--splitted {
      flex-direction: column;
      padding: 0px;

      .profile-card-body {
        padding: 0px 35px 15px 35px;
      }

      .profile-card-head {
        padding: 15px 35px;
        @media screen and (max-width: 767px) {
          padding: 15px;
        }
      }

      .profile-card-footer {
        padding: 15px 35px;
        border-top: 1px solid #e7e7e7;
        @media screen and (max-width: 1024px) {
          padding: 15px 100px;
        }
        @media screen and (max-width: 767px) {
          border-top: 0px;
          padding: 0 15px 15px 15px;
        }
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
}

.language-label-item {
  margin-right: 40px;
  font-size: 14px;
  img {
    margin-right: 5px;
  }
  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 16px;
    img {
      width: 25px;
      height: auto;
      margin-right: 7px;
    }
  }
}

.profile-language {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .input-container {
    margin-right: 25px;
    margin-bottom: 0px;
  }

  &__button-wrapper {
    max-width: 200px;

    > button {
      max-width: 200px;
      text-align: center;
      padding: 14px 30px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .input-container {
      margin-right: 0px;
      margin-bottom: 15px;
    }

    .profile-language__button-wrapper {
      max-width: 100%;
      > button {
        max-width: 100%;
      }
    }
  }
}
</style>
