<template>
  <div :class="{'scrolling-navbar': true, 'visible': visible}">
    <span @click="scrollToTop()" :disabled="scrolling">Наверх</span>
    <ul ref="list">
      <li>
        <a href="#description">Описание</a>
      </li>
      <li>
        <a href="#map">Карта</a>
      </li>
      <li>
        <a href="#program">Программа</a>
      </li>
      <li>
        <a href="#authors">Авторы</a>
      </li>
      <li>
        <a href="#team">Команда</a>
      </li>
      <li>
        <a href="#photo-video-slider">Фото/Видео</a>
      </li>
      <li>
        <a href="#equip">Снаряжение</a>
      </li>
      <li>
        <a href="#testimonials">Отзывы</a>
      </li>
      <li>
        <a href="#questions">Вопросы</a>
      </li>
    </ul>
    <button type="button" class="button button-green" @click="onClick()">Заказать</button>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  data() {
    return {
      visible: false,
      scrolling: false
    };
  },
  methods: {
    scrollToTop() {
      const $ = jQuery || null;
      if ($) {
        $("html, body").animate({ scrollTop: 0 }, 500);
      }
    },
    onClick() {
      this.$emit("click");
    }
  },
  mounted() {
    const links = this.$refs.list.querySelectorAll("li a"),
      sections = Array.from(links)
        .map(l => document.querySelector(l.getAttribute("href")))
        .filter(x => !!x),
      sectionsOffsets = sections.map((s, i) => {
        if (sections[i + 1]) {
          return [s.offsetTop, sections[i + 1].offsetTop];
        } else {
          return [s.offsetTop];
        }
      });

    links.forEach(l =>
      l.addEventListener(
        "click",
        e => {
          e.preventDefault();

          const href = e.target.getAttribute("href") || "";

          if (href)
            jQuery("html, body").animate(
              { scrollTop: jQuery(href).offset().top - 15 },
              600
            );
        },
        false
      )
    );

    window.addEventListener("scroll", () => {
      const scroll = document.scrollingElement.scrollTop;
      this.visible = scroll >= 500;
      links.forEach(l => l.classList.remove("active"));
      for (let i = 0; i < sectionsOffsets.length; i++) {
        if (scroll >= sectionsOffsets[i][0]) {
          if (
            (sectionsOffsets[i][1] && scroll <= sectionsOffsets[i][1]) ||
            (!sectionsOffsets[i][1] && i === links.length - 1)
          ) {
            links[i].classList.add("active");
          }
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.scrolling-navbar {
  position: fixed;
  top: -999px;
  left: 0px;

  width: 100%;
  padding: 15px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(45, 106, 163, 0.5);
  z-index: 11111;

  opacity: 0;
  transition: opacity 0.3 ease-in-out;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  &.visible {
    top: 0px;
    opacity: 1;
  }

  &.hidden {
    display: none !important;
  }

  > span {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  > button {
    font-weight: bold;
    font-size: 14px;
    padding: 7px 25px;
  }

  > img {
    width: 100%;
    max-width: 150px;
  }

  > ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;

      margin: 0 15px;

      a {
        font-size: 14px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;

        position: relative;
        &.active {
          &::after {
            content: "";
            width: 100%;
            height: 2px;
            bottom: -10px;
            left: 0;
            background-color: #fff;
            position: absolute;
          }
        }
      }
    }
  }
}
</style>
