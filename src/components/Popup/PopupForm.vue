<template>
  <form class="popup-form" @submit="onSubmit($event)">
    <div class="popup-form__row">
      <div class="popup-form__icon">
        <i class="fa fa-phone"></i>
      </div>
      <input type="tel" name="phone" class="input" placeholder="Ваш телефон">
    </div>
    <div class="popup-form__row">
      <div class="popup-form__icon">
        <i class="fa fa-envelope"></i>
      </div>
      <input type="email" name="email" class="input" placeholder="Ваш e-mail адрес">
    </div>
    <div class="popup-form__row">
      <div class="popup-form__icon">
        <i class="fa fa-user"></i>
      </div>
      <input type="text" name="name" class="input" placeholder="Ваше имя">
    </div>
    <div class="popup-form__agreement">
      <checkbox :reversed="true" :value="true">
        <span>
          Даю согласие на обработку
          <a href="#">персональных данных</a>
        </span>
      </checkbox>
    </div>
    <div class="text-center">
      <button class="button button-green button--large popup-form__button" type="submit">Отправить</button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$emit('submit');
    }
  }
};
</script>

<style lang="scss">
.popup-form {
  &__button {
    margin-top: 15px;
    padding: 18px 70px;

    @media screen and (max-width: 767px) {
      width: 100%;
      padding: 17px 50px;
    }
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;

    @media screen and (max-width: 767px) {
      justify-content: center;
    }
  }

  &__agreement {
    padding-left: 50px;

    .checkbox {
      span {
        font-size: 12px;
        font-weight: lighter;
        a {
          text-decoration: none;
        }
        &.square {
          transform: translateY(10%);
        }
      }
    }
  }

  &__icon {
    flex: none;
    width: 50px;
    margin: auto 15px auto 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    height: 50px;
    background-color: #b6eab2;
    font-size: 26px;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .input {
    flex: 1;
    padding: 17px 30px;
    background: #f6f6f6;
    font-size: 18px;
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }
}
</style>
