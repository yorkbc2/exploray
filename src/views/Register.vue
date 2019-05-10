<template>
  <div>
    <app-header :full="true" background="/images/login_bg.jpg" :title="'Добро пожаловать'">
      <floating-block title="Регистрация" :top="115" :wide="true">
        <template v-slot:footer>
            Уже зарегистрированны?&nbsp;
            <router-link to="/login" class="no-underline">
                Войдите.
            </router-link>
        </template>
      </floating-block>
    </app-header>
  </div>
</template>

<script>
import HeaderVue from "../components/Header/Header.vue";
import FloatingBlockVue from "../components/Blocks/FloatingBlock.vue";

export default {
  components: {
    "app-header": HeaderVue,
    "floating-block": FloatingBlockVue
  }
};
</script> 

<style lang="scss">
</style>
