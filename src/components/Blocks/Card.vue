<template>
  <div class="card">
    <span class="card__number">{{number | formattedNumber}}</span>
    <h3 class="card__header">{{title}}</h3>
    <div :class="{'card__toggler': true, toggled: isToggled}" ref="toggler">
      Ответ на вопрос:
      <icon name="arrow-down" fill="#000" hoverFill="#000" :width="15" :height="15" />
    </div>
    <div class="card__body" :style="{display: isMobile ? 'none' : 'block'}">
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
  data() {
    return {
      isMobile: window.innerWidth <= 560,
      isToggled: false
    }
  },
  mounted() {
    jQuery(this.$refs.toggler)
      .on('click', e => {
        this.isToggled = !this.isToggled;
        jQuery(this.$refs.toggler.parentElement)
          .find('.card__body')
          .slideToggle(300);
      });
  }
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
  &__toggler {
    display: none;
  }

  &__number {
    font-size: 32px;
    font-weight: bolder;
    position: absolute;
    top: 12px;
    right: 20px;
    color: #cfcfcf;
  }

  @media screen and (max-width: 769px) {
    padding-right: 60px;
  }

  @media screen and (max-width: 560px) {
    padding: 0px;
    &__header {
      font-weight: normal;
      margin-bottom: 0px;
      padding: 15px 30px 10px 15px;
    }

    &__number {
      display: none;
    }

    &__toggler {
      display: block;
      padding: 10px 30px 10px 15px;
      margin-top: 10px;
      border-top: 1px solid #e7e7e7;
      color: #979797;

      position: relative;
      &.toggled {
        .svg-inserted {
          transform: translateY(-50%) scale(-1);
        }
      }

      .svg-inserted {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
      }
    }

    &__body {
      padding: 10px 30px 15px 15px;
    }

    &::before {
      left: 15px;
    }
  }
}
</style>
