<template>
  <div>
    <app-header :full="true" background="/images/login_bg.jpg" :title="'Добро пожаловать'">
      <floating-block title="Регистрация" :top="115" :wide="true">
        <template v-slot:content>
          <form action class="default-form text-center" @submit="onSubmit($event)">
            <div class="default-form__row">
              <app-input :name="'name'" :type="'text'" :placeholder="'Имя'" ref="name"/>
            </div>
            <div class="default-form__row">
              <app-input
                :name="'phone'"
                :type="'tel'"
                :placeholder="'Телефон'"
                ref="phone"
                error="некорректный телефон"
              />
              <strong>или</strong>
              <app-input
                :name="'email'"
                :type="'email'"
                :placeholder="'E-mail'"
                ref="email"
                error="некорректный e-mail"
                :validators="[minLengthValidator('некорректный e-mail')]"
              />
            </div>
            <div class="default-form__row">
              <app-input
                :name="'password'"
                :type="'password'"
                :placeholder="'Придумайте пароль'"
                ref="password"
              />
              <app-input
                :name="'retry_password'"
                :type="'password'"
                :placeholder="'Повторите пароль'"
                ref="retry_password"
              />
            </div>
            <div
              class="default-form__row input-warning"
              v-if="passwordError"
            >Введенные пароли не совпадают</div>
            <div class="default-form__row">
              <button type="submit" class="button button-green button--large">Регистрация</button>
            </div>
          </form>
        </template>
        <template v-slot:footer>
          Уже зарегистрированны?&nbsp;
          <router-link to="/login" class="no-underline">Войдите.</router-link>
        </template>
      </floating-block>
    </app-header>
  </div>
</template>

<script>
import HeaderVue from "../components/Header/Header.vue";
import FloatingBlockVue from "../components/Blocks/FloatingBlock.vue";
import InputVue from "../components/Forms/Input.vue";
import { minLengthValidator } from "@/utils/validators";

export default {
  components: {
    "app-header": HeaderVue,
    "floating-block": FloatingBlockVue,
    "app-input": InputVue
  },
  data() {
    return {
      passwordError: false,
      defaultValidatorParams: {
        min: 0,
        max: 26
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const { name, email, phone, password, retry_password } = this.$refs;

      email.touch();
      phone.touch();

      if (email.value && !phone.value) phone.hideError();
      if (!email.value && phone.value) email.hideError();

      password.touch();
      retry_password.touch();

      this.passwordError =
        password.value !== retry_password.value ||
        (!password.value || !retry_password);
    },
    minLengthValidator(error) {
      return minLengthValidator({
        ...this.defaultValidatorParams,
        error
      });
    }
  }
};
</script> 

<style lang="scss">
</style>
