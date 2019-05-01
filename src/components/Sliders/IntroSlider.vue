<template>
  <div class="intro-wrapper">
    <div class="intro" :style="{ backgroundImage: `url(${backgroundImages[currentIndex]})` }">
      <div class="intro-slider-content">
        <h1>{{ headers[currentIndex] }}</h1>
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
            <button type="submit" class="form-button">
              Поиск
              <span class="result-label">120</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <ul class="intro-slider__dots">
      <li
        v-for="(_, index) in headers"
        :key="index"
        :class="{'intro-slider__dot': true, 'intro-slider__dot--active': currentIndex === index}"
        @click="changeSlide(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-intro",
  props: {
    backgroundImages: Array,
    headers: Array
  },
  data: () => ({
    currentIndex: 0
  }),
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    setInterval(() => {
      let ci = this.currentIndex + 1;
      if (ci >= this.headers.length) {
        ci = 0;
      }
      this.currentIndex = ci;
    }, 5000);
  }
};
</script>

<style lang="scss" >
.intro {
  position: relative;
  min-height: 600px;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  transition: background-image 0.6s ease-in-out;
  &-wrapper {
    position: relative;
  }
  @media screen and (max-width: 768px) {
    min-height: auto;
  }
}

.intro-slider {
  &-content {
    position: absolute;
    top: 40%;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    z-index: 3;

    max-width: 100%;

    h1 {
      text-align: center;
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 100px;
      color: #fff;
    }

    form {
      .input-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
        background-color: #fff;
        border-radius: 50px;
        padding-right: 170px;
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
        > div {
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
          border: 1px solid transparent;
          box-shadow: none;
          z-index: 1;
        }
        > button {
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
    }

    @media screen and (max-width: 768px) {
      top: auto;
      transform: none;
      left: auto;
      position: static;
      padding: 100px 20px 50px 20px;
      min-height: auto;
      h1 {
        font-size: 28px;
        margin-bottom: 20px;
      }

      form {
        .input-group {
          flex-direction: column;
          padding: 0px;
          background-color: transparent;

          > div {
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

            .toggler {
              font-size: 10px;
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
          }

          > button {
            position: static;
            width: 100%;
            padding: 9px 10px;
            margin-top: 5px;
            max-height: 50px;
          }
        }
      }
    }
  }
  &__dots {
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    bottom: 40px;
    z-index: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &__dot {
    list-style: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #b2b2b2;
    border-radius: 50%;
    margin: 0 4px;
    cursor: pointer;
    &--active {
      background-color: #0dba00;
    }
  }
}
</style>
