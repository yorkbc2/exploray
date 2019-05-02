<template>
  <div class="card">
    <span class="card__number">{{number | formattedNumber}}</span>
    <h3 class="card__header">{{title}}</h3>
    <div class="card__body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    title: String
  },
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    padding: 20px 35px;
    box-shadow: 2.5px 2.33px 10px 0px rgba(0, 0, 0, 0.3);  

    &::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 35px;
        width: 40px;
        height: 4px;
        background-color: #0dba00;
    }       

    &__header {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 15px;
    }

    &__body {
        font-size: 14px;
    }

    &__number {
        font-size: 32px;
        font-weight: bolder;
        position: absolute;
        top: 12px;
        right: 20px;
        color: #cfcfcf;
    }
}
</style>
