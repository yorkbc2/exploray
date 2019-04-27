<template>
  <section>
    <h2 class="section__title">Подпишитесь на новости</h2>
    <p>Будь в курсе последних новинок, получай выгодные предложения</p>
    <form action class="input-button-group">
      <input type="email" name="email" class="input" placeholder="Введите e-mail адрес">
      <button class="form-button" type="submit">Подписаться</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "app-subscribe",
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 40px 0 60px 0;
  text-align: center;
  background-size: cover;
  background-position: center -200px;
  background-repeat: no-repeat;
  background-image: url("/images/subscribe.jpg");
  p {
    margin: 0 0 50px 0;
    padding: 0;
  }
}
</style>
