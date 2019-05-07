<template>
  <div class="tours">
    <app-header
      title="Сравнивай и выбирай лучшее"
      :breads="{'/': 'Главная', '/tours': 'Путешествия'}"
      background="/images/tours_bg.jpg"
    >
      <input-group>
        <div class="input-group__element">
          <img src="/images/pin.png" alt class="icon">
          <input-check-picker
            :items="[
                        'Россия',
                        'Украина',
                        'Карелия и ЛО',
                        'Китай'
                    ]"
            placeholder="Ваш регион, страна"
          />
        </div>
        <div class="input-group__element">
          <img src="/images/traveler.png" alt class="icon" width="30px" height="30px">
          <input-check-picker
            :items="[
                        'Россия',
                        'Украина',
                        'Карелия и ЛО',
                        'Китай'
                    ]"
            placeholder="Выбрать тип тура"
          />
        </div>
      </input-group>
    </app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-3 product-filters-wrapper">
          <product-filters/>
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12 product-list-wrapper">
          <product-controls/>
          <product-list :data="data" :strokeView="$store.getters.strokeView"/>
        </div>
      </div>
    </div>
    <section class="section offset-section">
      <div class="container">
        <h2 class="section__title">Что мы предлагаем?</h2> 
        <offset-block header="Новинки" image="/images/tours_about.jpg" :uppercased="false">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi placeat numquam molestiae deserunt ducimus iste commodi nobis quaerat tenetur qui nesciunt doloribus sunt, ad ullam? Reiciendis sit repellat vero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sequi placeat numquam molestiae deserunt ducimus iste commodi nobis quaerat tenetur qui nesciunt doloribus sunt, ad ullam? Reiciendis sit repellat vero.</p>
        </offset-block>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import ProductList from "@/components/Product/ProductList.vue";
import InputGroup from "@/components/Forms/InputGroup.vue";
import ProductFilters from "@/components/Product/ProductFilters.vue";
import ProductControls from "@/components/Product/ProductControls.vue";
export default {
  components: {
    "app-header": Header,
    "product-list": ProductList,
    "product-filters": ProductFilters,
    "product-controls": ProductControls,
    "input-group": InputGroup
  },
  computed: {
    data() {
      return this.$store.state.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list-wrapper {
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex: 1;
    max-width: 100%;
    float: none;
    padding: 0px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }
}
.product-filters-wrapper {
  @media screen and (max-width: 1024px) {
    width: 0px;
    padding: 0px;
    flex: 0;
  }
}
.offset-section { 
  @media screen and (max-width: 1024px) {
    margin-top: 25px;
    margin-bottom: 15px;
  }
}
</style>
