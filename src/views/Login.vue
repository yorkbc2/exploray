<template>
  <div class="auth-wrapper">
    <app-header :full="true" background="/images/login_bg.jpg" :title="'Добро пожаловать'">
      <floating-block title="Вход в личный кабинет" :top="isTablet ? 180 : (isMobile ? 125 : 120)">
        <template v-slot:content>
          <form action class="default-form text-center" @submit="onSubmit($event)">
            <div class="default-form__row" v-for="(input, index) in inputs" :key="index">
              <app-input
                :name="input.name"
                :type="input.type"
                :placeholder="input.placeholder"
                :error="input.error"
                ref="inputs"
              />
            </div>
            <div class="default-form__row">
              <checkbox class="default-form__checkbox" label="Запомнить меня" :reversed="true"/>
            </div>
            <div class="default-form__row">
              <button type="submit" class="button button-green button--large">Войти</button>
            </div>
          </form>
        </template>
        <template v-slot:footer>
          <div class="text-center d-flex flex-column">
            <router-link to="/restore" class="grey" v-if="!isTablet">Напомнить пароль</router-link>
            <splitted-list splitter="или"/>
            <router-link to="/register" class="no-underline">Зарегистрироваться</router-link>
          </div>
        </template>
      </floating-block>
    </app-header>
  </div>
</template>

<script>
import HeaderVue from "../components/Header/Header.vue";
import FloatingBlockVue from "../components/Blocks/FloatingBlock.vue";
import InputVue from "../components/Forms/Input.vue";
import SocialSplittedListVue from "../components/Lists/SocialSplittedList.vue";

export default {
  components: {
    "app-header": HeaderVue,
    "floating-block": FloatingBlockVue,
    "app-input": InputVue,
    "splitted-list": SocialSplittedListVue
  },
  data() {
    return {
      inputs: [
        {
          name: "email",
          type: "email",
          placeholder: "E-mail",
          error: "некорректный e-mail"
        },
        {
          type: "password",
          name: "password",
          placeholder: "Пароль",
          error: "неверный пароль"
        }
      ]
    };
  },
  computed: {
    isTablet: () => window.innerWidth <= 1024 && window.innerWidth >= 768,
    isMobile: () => window.innerWidth <= 767
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let data = {},
        invalid = false;
      for (let i in this.$refs.inputs) {
        const input = this.$refs.inputs[i];
        input.touch();
        if (input.invalid) {
          invalid = true;
          continue;
        }
        data[input.name] = input.value;
      }
      if (!invalid) {
        console.log(data);
      }
    }
  }
};
</script> 
