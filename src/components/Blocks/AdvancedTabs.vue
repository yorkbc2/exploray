<template>
  <div class="advanced-tabs" ref="container">
    <div class="advanced-tabs__tab">
      <h3 class="tab__subtitle">
        Свободное время, Трансфер
        <small>Первая прогулка по городу</small>
      </h3>
      <div class="tab__panel">
        <div>1 день</div>
        <div>
          <img src="/images/map.png" alt class="tab__panel-icon">
          <span>10 часов,</span>
          <span>24 км пути</span>
        </div>
        <div>
          <img src="/images/bed.png" alt class="tab__panel-icon">
          Гостиница
        </div>
        <div>
          <img src="/images/eating.png" alt class="tab__panel-icon">
          Не включено
        </div>
      </div>
      <div class="tab__content">
        <p>Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание систем массового участия.</p>
        <ul class="inline-list">
          <li>2 человека в палатке</li>
          <li>Туалет отсутствует</li>
          <li>Дикая природа</li>
        </ul>
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
        </div>
      </div>
    </div>
    <div class="advanced-tabs__tab">
      <h3 class="tab__subtitle">
        Свободное время, Трансфер
        <small>Первая прогулка по городу</small>
      </h3>
      <div class="tab__panel">
        <div>1 день</div>
        <div>
          <img src="/images/map.png" alt class="tab__panel-icon">
          10 часов,
          24 км пути
        </div>
        <div>
          <img src="/images/bed.png" alt class="tab__panel-icon">
          Гостиница
        </div>
        <div>
          <img src="/images/eating.png" alt class="tab__panel-icon">
          Не включено
        </div>
      </div>
      <div class="tab__content">
        <p>Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание систем массового участия.</p>
        <ul class="inline-list">
          <li>2 человека в палатке</li>
          <li>Туалет отсутствует</li>
          <li>Дикая природа</li>
        </ul>
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
        </div>
      </div>
    </div>
    <div class="advanced-tabs__tab">
      <h3 class="tab__subtitle">
        Свободное время, Трансфер
        <small>Первая прогулка по городу</small>
      </h3>
      <div class="tab__panel">
        <div>1 день</div>
        <div>
          <img src="/images/map.png" alt class="tab__panel-icon">
          10 часов,
          24 км пути
        </div>
        <div>
          <img src="/images/bed.png" alt class="tab__panel-icon">
          Гостиница
        </div>
        <div>
          <img src="/images/eating.png" alt class="tab__panel-icon">
          Не включено
        </div>
      </div>
      <div class="tab__content">
        <p>Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание систем массового участия.</p>
        <ul class="inline-list">
          <li>2 человека в палатке</li>
          <li>Туалет отсутствует</li>
          <li>Дикая природа</li>
        </ul>
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img src="/images/tour_video.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null
    };
  },
  mounted() {
    const el = jQuery(this.$refs.container);
    const tabs = el.find(".advanced-tabs__tab");
    tabs.each((index, el) => {
      jQuery(el)
        .find(".tab__content")
        .hide();
    });
    tabs.find(".tab__panel").each((i, e) => {
      jQuery(e).on("click", event => {
        const el = jQuery(event.target),
          parent = el.parents(".advanced-tabs__tab"),
          content = parent.find(".tab__content");
        if (this.activeTab !== null && this.activeTab === i) {
          content.slideUp(300);
          parent.removeClass("toggled");
          return;
        }
        this.activeTab = i;
        tabs
          .removeClass("toggled")
          .find(".tab__content")
          .slideUp(300);

        content.slideDown(300);
        parent.addClass("toggled");
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.advanced-tabs {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 35px;
    width: 5px;
    background-color: #d7d7d7;
    height: 103%;
    top: 0px;
    z-index: -1;
  }

  &__tab {
    z-index: 10;
    .tab__subtitle {
      font-size: 24px;
      font-weight: 600;
      padding-left: 80px;

      small {
        display: block;
        font-size: 14px;
        margin-top: 5px;
        color: #838383;
      }
    }
    .tab__content {
      padding-left: 80px;
      color: #646464;

      p {
        font-size: 14px;
      }
    }
    .tab__panel {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 12px 20px 12px 80px;
      background-color: #fff;
      border: 1px solid #e7e7e7;
      box-shadow: 2.5px 5.23px 7px 0px rgba(0, 0, 0, 0.2);
      z-index: 10;
      border-radius: 50px;
      height: 60px;
      transition: background-color 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #f4f4f4;
      }

      &::before {
        content: "";
        left: 20px;
        top: 50%;
        position: absolute;
        display: block;
        background-image: url("/images/hide.png");
        width: 30px;
        height: 25px;
        background-size: cover;
        background-position: center;
        transform: translateY(-50%);
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 35px;
        position: relative;
        line-height: 110%;

        font-size: 14px;

        &:first-child {
          padding-left: 0px;
        }

        .tab__panel-icon {
          position: absolute;
          height: 25px;
          width: auto;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    &.toggled {
      .tab__panel {
        background-color: #f4f4f4;
        &::before {
          background-image: url("/images/show.png");
        }
      }
    }
  }
}
</style>
