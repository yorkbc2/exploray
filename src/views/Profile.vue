<template>
  <div class="profile-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="profile-card padding-right">
            <div class="sm">
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
                <div class="default-form__row between">
                  <app-input name="name" type="text" label="Имя:"/>
                  <app-input name="surname" type="text" label="Фамилия:"/>
                  <app-input name="father_name" type="text" label="Отчество:"/>
                </div>
                <div class="default-form__row between">
                  <app-input name="name" type="text" label="Город:"/>
                  <app-input name="surname" type="text" label="Страна:"/>
                  <div class="input-container default-advanced-select">
                    <label class="input-label">Тип профиля:</label>
                    <advanced-select
                      class="default-form-advanced-select"
                      :options="[{ value: 'Частное лицо' }, { value: 'Компания' }]"
                      placeholder="Не выбрано"
                    />
                  </div>
                </div>
                <div class="default-form__row">
                  <app-multi-date label="Дата рождения:" />
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
              <h5>Контакты</h5>
              <div class="default-form__row">
                <app-input name="phone[]" type="tel" label="Телефон 1:"/>
                <app-input name="phone[]" type="tel" label="Телефон 2:"/>
              </div>
              <div class="default-form__row">
                <app-input name="email" type="email" label="E-mail адрес:" :inline="true"/>
              </div>
              <h5>Мессенджеры</h5>
              <div class="default-form__row">
                <app-input name="telegram" type="text" label="Telegram:">
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
                <app-input name="whatsapp" type="text" label="WhatsApp:">
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
                <app-input name="skype" type="tel" label="Skype:">
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
                <app-input name="viber" type="tel" label="Viber:">
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
        <div class="col-md-6">
          <div class="profile-card">
            <div class="default-form default-form--wide default-form--without-last text-left">
              <h5>Образование</h5>
              <div class="default-form__row">
                <app-input name="uni" type="text" label="Название учреждения:"/>
              </div>
              <div class="default-form__row">
                <app-input name="speciality" type="text" label="Специальность:"/>
              </div>
              <div class="default-form__row">
                <app-multi-date :inline="true" label="Дата поступления:" :hideDays="true" />
              </div>
              <div class="default-form__row">
                <app-multi-date :inline="true" label="Дата окончания:" :hideDays="true" />
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
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="profile-card profile-card--splitted">
            <div class="profile-card-body">
              <h5>Языки</h5>
              <div class="d-flex">
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
        <div class="col-md-6">
          <div class="profile-card">
            <div class="default-form default-form--wide default-form--without-last text-left">
              <h5>Навыки</h5>
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
import InputMultiDateVue from '../components/Forms/InputMultiDate.vue';
export default {
  components: {
    "app-input": InputVue,
    "app-multi-date": InputMultiDateVue
  },
  data() {
    return {
      aboutMaxLength: 450,
      aboutLength: 0,
      isAvatar: false
    };
  },
  methods: {
    toggleAvatar() {
      this.isAvatar = !this.isAvatar;
    }
  },
  mounted() {
    this.$refs.about.addEventListener("input", e => {
      this.aboutLength = e.target.value.length;
    });
  }
};
</script>


<style lang="scss">
.profile-wrapper {
  position: relative;
  padding: 90px 0 250px;

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
  }

  .profile-save-container {
    margin-top: 40px;
  }

  .profile-links {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    margin-top: 15px;

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
    }
    display: flex;
    flex-direction: row;
    justify-content: center;

    border-radius: 10px;
    box-shadow: 2.5px 4.33px 5px 0px rgba(0, 0, 0, 0.2);

    h5 {
      font-size: 16px;
      margin-bottom: 15px;
    }

    .default-form {
      .default-form__row {
        justify-content: flex-start;

        > .input-container {
          max-width: 250px;
          margin-right: 30px;

          &--block {
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
      }
    }

    &--splitted {
      flex-direction: column;
      padding: 0px;

      .profile-card-body {
        padding: 15px 35px;
      }

      .profile-card-footer {
        padding: 15px 35px;
        border-top: 1px solid #e7e7e7;
      }
    }
  }
}

.language-label-item {
  margin-right: 40px;
  font-size: 14px;
  img {
    margin-right: 5px;
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
}
</style>
