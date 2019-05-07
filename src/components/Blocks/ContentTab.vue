<template>
  <div class="content-tab">
    <div class="content-tab__header" ref="header">
      <h3 class="section__title section__title--left section__title--lighter" v-html="header"></h3>
      <icon name="arrow-down" fill="#000" :width="15" :height="15" hoverFill="#000"/>
    </div>
    <div class="content-tab__body" ref="body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String
  },
  mounted() {
    const { header, body } = this.$refs;
    header.addEventListener("click", () => {
      jQuery(header).toggleClass("active");
      jQuery(body).slideToggle(400);
    });
  }
};
</script>

<style lang="scss">
.content-tab {
  position: relative;
  &__header {
    position: relative;
    svg {
      display: none;
    }
    @media screen and (max-width: 767px) {
      padding: 10px 25px 0;

      h3.section__title {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 0;
        padding-bottom: 10px;
        transition: padding-bottom 0.3s ease-in-out;
      }

      &:not(.active) {
        h3.section__title {
          &::after {
            display: none;
          }
        }
      }

      svg {
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
      }

      &.active {
        padding-bottom: 20px;
        h3.section__title {
          padding-bottom: 20px;
        }
        svg {
          transform: translateY(-50%) scale(-1);
        }
      }
    }
  }

  &__body {
    @media screen and (max-width: 767px) {
      display: none;

      padding: 10px 25px;

      ul.check-list {
        li {
          padding-left: 0px;
          margin-bottom: 15px;
          font-size: 14px;
          font-weight: normal;
          &::before {
            left: -20px;
            top: 3px;
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 10px;
    background-color: #ebebeb;
    border-radius: 50px;
    margin-bottom: 15px;
  }
}
</style>
