<template>
  <div class="intro-wrapper">
    <div class="intro-slider">
      <carousel
        ref="slider"
        :perPage="1"
        :paginationEnabled="true"
        :autoplay="true"
        :autoplayTimeout="5000"
        :loop="true"
      >
        <slide
          v-for="(header, index) in headers"
          :key="index"
          :style="{'background-image': `url(${backgroundImages[index]})`}"
          class="intro-slider__slide"
        >
          <h1>{{header}}</h1>
        </slide>
      </carousel>
      <div class="intro-slider__content">
        <form action>
          <div class="input-group">
            <div class="input-with-icon">
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
            <div class="input-with-icon input-date-picker">
              <img src="/images/calendar.png" alt class="icon">
              <input-date-picker/>
            </div>
            <div class="input-with-icon">
              <img src="/images/steps.png" alt class="icon">
              <input-check-picker
                :items="[
                        'С детьми',
                        'Вдвоем',
                        'Большая семья',
                        'Группой 8+'
                    ]"
                placeholder="Выбор активности"
              />
            </div>
            <div class="button-wrapper">
              <button type="submit" class="form-button" @click="scrollToResults($event)">
                Поиск
                <span class="result-label">120</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-intro",
  props: {
    backgroundImages: Array,
    headers: Array
  },
  methods: {
    scrollToResults(e) {
      e.preventDefault();
      
      if (jQuery) {
        jQuery('html, body')
          .animate({
            scrollTop: jQuery('#home-search-results').offset().top + 'px'
          }, 400);
      }
    }
  },
  mounted() {
    this.$refs.slider.goToPage(1);
  }
};
</script>

<style lang="scss" >
.intro-wrapper {
  .intro-slider {
    position: relative;
    min-height: 600px;
      @media screen and (max-width: 767px) {
        min-height: 540px;
      }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: transparent;
      z-index: 0;
      top: 0px;
    }

    .VueCarousel {
      &-inner {
        transition: opacity 1s ease-in-out !important;
      }
      &-slide {
        opacity: 0 !important;

        &-active {
          transition: opacity 0.8s ease-in-out !important;
          opacity: 1 !important;
        }
      }
      &-pagination {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0!important;
        @media screen and (max-width: 767px) {
          display: none!important;
        }
      }

      &-dot {
        transform: scale(1.1);
        margin-right: 5px;
        &--active {
          background-color: #0dba00 !important;
        }
      }
    }
    &__slide {
      min-height: 600px;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      h1 {
        text-align: center;
        font-size: 36px;
        font-weight: 800;
        color: #fff;
        padding-top: 150px;
      }
      @media screen and (max-width: 1024px) {
        h1 {
          padding-top: 180px;
        }
      }
      @media screen and (max-width: 767px) {
        min-height: 540px;
        h1 {
          padding-top: 100px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
    &__content {
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      left: 50%;
      z-index: 3;

      max-width: 100%;

      form {
        .input-group {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: nowrap;
          background-color: #fff;
          border-radius: 50px;
          padding-right: 170px;

          > div:not(.button-wrapper) {
            &:first-child {
              input {
                border-radius: 50px 0 0 50px;
              }
            }

            position: relative;
            margin: 5px 0;
            padding-left: 50px;
            border-right: 1px solid #e7e7e7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            > .icon {
              position: absolute;
              height: 30px;
              width: auto;
              left: 20px;
              top: 50%;
              transform: translateY(-50%);
              z-index: 2;
            }
          }

          input {
            padding: 10px 35px 10px 10px;
            background: #fff;
            /* @changed */
            border: 1px solid transparent!important;
            margin: 0!important;
            box-shadow: none;
            z-index: 1;
          }
        }
        button:not(.toggler) {
          @media screen and (min-width: 1025px) {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            max-height: 100%;
            font-size: 20px;
            padding: 0px 30px 0 30px;
            align-self: center;

            .result-label {
              display: inline-block;
              margin-left: 20px;
              font-weight: normal;
            }
          }
        }
        .date-picker-wrapper {
          .mx-datepicker {
            .mx-input-wrapper {
              .mx-input {
                font-size: 14px;
              }
              &::after {
                font-size: 14px;
                color: #8e8e8e;
              }
            }
          }
        }
      }

      @media screen and (max-width: 1024px) {
        top: 60%;
        width: 100%;
        padding: 0;
        max-width: 625px;
        form {
          .input-group {
            flex-direction: column;
            padding: 0px;
            background-color: transparent;
            > div.button-wrapper {
              margin-top: 5px;
              button.form-button {
                width: 100%;
              }
            }
            > div:not(.button-wrapper) {
              padding-left: 0px;
              background-color: #fff;
              border-radius: 50px;

              .icon {
                height: 20px;
                left: 20px;
              }

              input {
                width: 100%;
                padding-left: 50px;
                padding-top: 14px;
                padding-bottom: 14px;
                &,
                &:first-child,
                &:last-child {
                  border-radius: 50px;
                }
              }

              &.input-date-picker {
                background-color: transparent;
                img {
                  display: none;
                }
                .date-picker-wrapper {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  .mx-datepicker {
                    width: 45% !important;
                    .mx-input-wrapper {
                      &::after {
                        font-size: 10px;
                        right: 8px;
                      }
                    }
                  }
                  .mx-input {
                    padding: 14px 12px;
                    border-radius: 50px;
                  }
                }
              }

              button:not(.toggler) {
                position: static;
                width: 100%;
                padding: 9px 10px;
                margin-top: 5px;
                max-height: 50px;
              }

              .toggler {
                font-size: 10px;
              }
            }
          }
        }
      }

      @media screen and (max-width: 1024px) and (min-width: 768px) {
        form {
          .input-group {
            flex-direction: row;
            flex-wrap: wrap;
            > div:not(.button-wrapper),
            > div {
              width: 50%;
              margin: 10px 0;
              padding-left: 20px;
              .icon {
                height: 25px;
                left: 20px;
              }
              button.form-button {
                width: 100%;
                font-weight: bolder;
                font-size: 20px;
                padding-top: 12px;
                padding-bottom: 12px;
              }

              .date-picker-wrapper {
                > .mx-datepicker {
                  min-width: 48% !important;
                  .mx-input-wrapper {
                    &::after {
                      right: 15px !important;
                    }
                  }
                  .mx-input {
                    font-weight: lighter;
                    font-size: 12px;
                    padding: 16px 12px 16px 20px;
                  }
                }
              }
            }
            input {
              padding: 5px 10px 5px;
            }
          }
        }
      }

      @media screen and (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        padding: 0 30px;
        form {
          .input-group {
            > div:not(.button-wrapper),
            > div {
              button.form-button {
              }
            }
          }
        }
      }
    }
  }
}
</style>
