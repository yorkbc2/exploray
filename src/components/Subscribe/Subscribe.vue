<template>
  <section>
    <h2 class="section__title">Подпишись на новости</h2>
    <p>Будь в курсе последних новинок и получай выгодные предложения</p>
    <form action class="input-button-group">
      <input type="email" name="email" class="input" placeholder="Введите Ваш e-mail адрес">
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
  padding: 30px 25px 60px;
  text-align: center;
  background-size: cover;
  background-position: center -200px;
  background-repeat: no-repeat;
  background-image: url("/images/subscribe.jpg");
  h2.section__title {
    margin-bottom: 20px;
  }
  p {
    margin: 0 0 40px 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    background-position: center;
  }
}
</style>
