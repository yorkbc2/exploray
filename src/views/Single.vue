<template>
  <div class="single">
    <div class="full-window-slider">
      <div class="full-window-slider-wrapper">
        <!-- @changed -->
        <div class="full-window-slider__overlay"></div>
        <div class="single__place">
          <i class="fa fa-map-marker"/> Камчатская долина, Россия
        </div>
        <carousel :perPage="1" :navigationEnabled="true">
          <slide
            class="full-window-slider__slide"
            style="background-image: url('/images/tour_bg.jpg');"
          ></slide>
          <slide
            class="full-window-slider__slide"
            style="background-image: url('/images/tour_bg.jpg');"
          ></slide>
        </carousel>
        <div class="full-window-slider__slide-content">
          <div class="container">
            <h2 class="slide__title">Камчатский хит: тур без рюкзаков</h2>
            <!-- @changed -->
            <div class="full-window-slider__slide-content-adv">
              <span class="slide__iconed-text">
                <img src="/images/vulcano.png"> 5 вулканов
              </span>
              <span class="slide__iconed-text">
                <img src="/images/springs.png"> 3 гейзера
              </span>
              <span class="slide__iconed-text">
                <img src="/images/bear.png"> Медведи
              </span>
            </div>
            <p
              class="slide__description"
            >Живописная природа, горные хребты и море незабываемых впечатлений.</p>
            <a href="#" class="button button-green button--large" @click="callPopup()">Заказать</a>
          </div>
        </div>
      </div>
      <div class="container full-window-slider__card-wrapper">
        <div class="full-window-slider__card">
          <div class="full-window-slider__card-breads mobile-hide">
            <breadcrumbs
              :path="{
                '/': 'Главная',
                '/tours': 'Путешествия',
                '/tour/1': 'Камчатка'
            }"
            />
          </div>
          <div class="full-window-slider__card-body">
            <slot name="card"/>
            <div class="full-window-slider-card__row">
              <div class="left">
                Размер группы
                <small>Осталось 12 мест из 15</small>
              </div>
              <div class="right">
                <strong>4 - 20 человек</strong>
              </div>
            </div>

            <div class="full-window-slider-card__row">
              <div class="left">Расстояние</div>
              <div class="right">
                <strong>50 километров</strong>
              </div>
            </div>

            <div class="full-window-slider-card__row">
              <div class="left">Тип активности</div>
              <div class="right">
                <strong>Поход, сплав</strong>
              </div>
            </div>

            <div class="full-window-slider-card__row">
              <div class="left">
                Сложность
                <small>Новичкам, тур без рюкзаков</small>
              </div>
              <div class="right">
                <difficulty-list :value="4"/>
              </div>
            </div>

            <div class="full-window-slider-card__row">
              <div class="left">Проживание</div>
              <div class="right">
                <div class="image-list">
                  <span>
                    <img src="/images/bed.png" height="20px">
                  </span>
                  <span>
                    <img src="/images/tent.png" height="21px">
                  </span>
                </div>
              </div>
            </div>

            <div class="full-window-slider-card__row">
              <div class="left">
                Рейтинг
                <small>
                  На основании
                  <a href="#">отзывов</a>
                </small>
              </div>
              <div class="right">
                <app-stars :stars="3" :big="true"/>
                <div class="text-center">
                  <strong>3/5</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="full-window-slider__card-footer">
            <div class="full-window-slider__card-footer__content">
              <slot name="card-footer"/>
              <div class="full-window-slider-card__row">
                <div class="left">
                  <h5>50 000 руб.</h5>
                </div>
                <div class="right">
                  <div class="default-badge">7 дней</div>
                </div>
              </div>
              <p>
                <small>Стоимость указана за одного человека. Для детей до 14 лет, действует скидка 14%.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-line intro-slider-line">
      <div class="container">
        <div class="row intro-slider-line__row">
          <div class="col-md-5"></div>
          <div class="col-md-7 block-line__row">
            <div class="intro-slider-line__links">
              <div>
                <img src="/images/video.png" height="18px">&nbsp;&nbsp;
                <a href="#" @click="slideToToggler($event, 1)">Посмотреть видео</a>
              </div>
              <div>
                <img src="/images/pictures.png" height="18px">&nbsp;&nbsp;
                <a href="#" @click="slideToToggler($event, 0)">Посмотреть фото</a>
              </div>
            </div>
            <div>
              <div
                :class="{'advanced-select advanced-select--reversed advanced-select--mobile-reversed': true, toggled}"
              >
                <span class="advanced-select__current" @click="toggle()">
                  {{ currentSelectValue || 'Даты и цены' }}
                  <icon name="arrow-down" fill="#000" hoverFill="#000" :width="13" :height="13"/>
                </span>
                <ul class="advanced-select__dropdown" ref="dropdown" :style="{ display: 'none' }">
                  <li
                    v-for="(option, index) in [
                    {
                      value: '23.04.19 - 30.04.19',
                      description: '(Осталось 5 мест)'
                      },
                      {
                      value: '23.04.19 - 30.04.19',
                      description: '(Осталось 5 мест)'
                      },
                      {
                      value: '23.04.19 - 30.04.19',
                      description: '(Осталось 5 мест)'
                      }
                    ]"
                    :key="index"
                    @click="dropdownSelect(option)"
                  >
                    <span>{{ option.value }}</span>
                    <small v-if="option.description">{{option.description}}</small>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="button button--outlined button-white button--wide button--rect"
                @click="slideTo('#about-section')"
              >Вопросы</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row intro-subtext__row">
        <div class="col-md-5"></div>
        <div class="col-md-7">
          <div class="single-subtitle">
            <h3>Exploray</h3>
            <p>Узнайте больше подробнoстей о туре на Камчатку без рюкзаков</p>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <content-tab header="Описание тура">
          <div class="row about-row splitted-bottom">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <ul class="check-list">
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <ul class="check-list">
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
              </ul>
            </div>
          </div>
        </content-tab>
        <div class="row about-row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <content-tab header="Что включает тур?">
              <ul class="check-list">
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
              </ul>
            </content-tab>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <content-tab :header="'Что <span>НЕ</span> включает тур?'">
              <ul class="check-list check-list--red">
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
                <li>
                  Ежедневный пешие выходы налегке, проживание 3 ночи из 11
                  в палатках. Обещанный тур без рюкзаков и прочих вещей,
                  которые отвлекают.
                </li>
              </ul>
            </content-tab>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">О путешествии</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="about-item">
              <h4>14 дней</h4>
              <p>Мы предлагаем именно столько времени насладиться путешествием.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="about-item">
              <h4>14 дней</h4>
              <p>Мы предлагаем именно столько времени насладиться путешествием.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="about-item">
              <h4>14 дней</h4>
              <p>Мы предлагаем именно столько времени насладиться путешествием.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="about-item">
              <h4>14 дней</h4>
              <p>Мы предлагаем именно столько времени насладиться путешествием.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="about-item">
              <h4>14 дней</h4>
              <p>Мы предлагаем именно столько времени насладиться путешествием.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="about-item">
              <h4>14 дней</h4>
              <p>Мы предлагаем именно столько времени насладиться путешествием.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Программа</h2>
        <div class="row program-row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90362.91521378355!2d34.03917345542132!3d44.94689809437293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eadddedf991cc5%3A0x9c29422fbc780b40!2sSimferopol!5e0!3m2!1sen!2sua!4v1556966565652!5m2!1sen!2sua"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
            <advanced-tabs/>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--colored author">
      <div class="container">
        <h2 class="section__title">Автор</h2>
        <offset-block :reversed="true" header="Организатор тура" image="/images/tour_org.jpg">
          <p>Официальный туроператор, работает с 2006 года. За это время мы провели тысячи сделок и подписали сотни контрактов на постоянное сотрудничество.</p>
          <div>
            <div class="row author__row">
              <div class="col-md-8">
                <p>
                  <a href="#">Читать отзывы</a>
                </p>
              </div>
              <div class="col-md-4 text-center">
                <app-stars :stars="4"/>
                <strong class="big-text">4/5</strong>
              </div>
            </div>
          </div>
        </offset-block>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Прогрaмма тура</h2>
      </div>
      <carousel :perPage="1" class="program-slider" :navigationEnabled="true">
        <slide :style="{backgroundImage: `url('/images/program_bg.jpg')`}">
          <div class="content">
            <h4>Горный массив в Альпах</h4>
            <p>
              Захватывающие пейзажи горных массивов, которые вы никогда не забудете,
              а наоборот, появится желание чаще бывать в горах.
            </p>
          </div>
        </slide>
        <slide :style="{backgroundImage: `url('/images/program_bg.jpg')`}">
          <div class="content">
            <h4>Горный массив в Альпах</h4>
            <p>
              Захватывающие пейзажи горных массивов, которые вы никогда не забудете,
              а наоборот, появится желание чаще бывать в горах.
            </p>
          </div>
        </slide>
      </carousel>
    </section>
    <section class="section" id="photo-video-slider">
      <div class="container">
        <h2 class="section__title">Фото и видео</h2>
        <toggler ref="toggler" :items="['Фото', 'Видео']">
          <div class="toggler-item">
            <app-default-slider
              class="photo-slider"
              :perPage="[[320, 1], [560, 2], [767, 3], [1024, 4]]"
              :lightBoxImages="photos"
            >
              <slide v-for="(item, index) in photos" :key="index">
                <div class="photo-slider__card">
                  <img :src="item.image" alt>
                  <div class="photo-slider__card-mask">
                    <span class="button button-white button--outlined lightbox-trigger">
                      <icon name="zoom-out" hoverFill="#000"/>Просмотреть фото
                    </span>
                  </div>
                </div>
              </slide>
            </app-default-slider>
          </div>
          <div class="toggler-item">
            <app-default-slider
              class="photo-slider"
              :perPage="[[320, 1], [560, 2], [767, 3], [1024, 4]]"
            >
              <slide v-for="(item, index) in videos" :key="index">
                <div class="photo-slider__card">
                  <img :src="item.image" alt>
                  <div class="photo-slider__card-mask">
                    <a :href="item.url" class="button button-white button--outlined">
                      <icon name="zoom-out" hoverFill="#000"/>Просмотреть видео
                    </a>
                  </div>
                </div>
              </slide>
            </app-default-slider>
          </div>
        </toggler>
      </div>
    </section>
    <section class="section section--with-header">
      <div class="section__header" :style="{ backgroundImage: `url(/images/about-header.jpg)` }">
        <h2 class="section__title">Автор</h2>
      </div>
      <div class="section__content">
        <div class="container">
          <div class="author-content">
            <div
              class="author-content__image"
              :style="{ backgroundImage: `url(/images/about-avatar.png)` }"
            ></div>
            <h4>Андрей Токарев</h4>
            <p class="small">Автор тура в Альпы</p>
            <p>Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют от нас анализа существенных финансовых и административных условий. Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа соответствующий условий активизации.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- @changed
    New block!-->
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Наша команда</h2>
        <app-default-slider class="team-slider" :perPage="[[320, 1], [768, 3]]">
          <slide>
            <div class="team-item">
              <div
                class="team-item__image"
                :style="{ backgroundImage: `url(/images/team-avatar.png)` }"
              ></div>
              <h4>Кирилл Самойлов</h4>
              <p class="small">Основатель тура</p>
              <p>Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют от нас анализа существенных финансовых и условий.</p>
            </div>
          </slide>
          <slide>
            <div class="team-item">
              <div
                class="team-item__image"
                :style="{ backgroundImage: `url(/images/team-avatar.png)` }"
              ></div>
              <h4>Кирилл Самойлов</h4>
              <p class="small">Основатель тура</p>
              <p>Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют от нас анализа существенных финансовых и условий.</p>
            </div>
          </slide>
          <slide>
            <div class="team-item">
              <div
                class="team-item__image"
                :style="{ backgroundImage: `url(/images/team-avatar.png)` }"
              ></div>
              <h4>Кирилл Самойлов</h4>
              <p class="small">Основатель тура</p>
              <p>Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют от нас анализа существенных финансовых и условий.</p>
            </div>
          </slide>
        </app-default-slider>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Как добраться</h2>
        <offset-block header="Туда - обратно" image="/images/tour_way.jpg">
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
        </offset-block>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Снаряжение</h2>
        <offset-block
          header="Предоставляется снаряжение"
          image="/images/tour_payment.jpg"
          :reversed="true"
        >
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
          <div class="d-flex">
            <strong class="flex justify-content-center d-flex flex-column">Что взять с собой:</strong>
            <div>
              <a href="#" class="button button-green">Личное снаряжение</a>
            </div>
          </div>
        </offset-block>
      </div>
    </section>
    <section class="section section--colored equip">
      <div class="container">
        <h2 class="section__title">Что взять с собой</h2>
        <div class="about-item-list">
          <!-- @changed -->
          <div class="about-item">
            <h4>Одежда</h4>
            <p>Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем.</p>
          </div>
          <div class="about-item">
            <h4>Одежда</h4>
            <p>Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем.</p>
          </div>
          <div class="about-item">
            <h4>Одежда</h4>
            <p>Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем.</p>
          </div>
          <div class="about-item">
            <h4>Одежда</h4>
            <p>Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем.</p>
          </div>
          <div class="about-item">
            <h4>Одежда</h4>
            <p>Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем.</p>
          </div>
          <div class="about-item">
            <h4>Одежда</h4>
            <p>Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки систем.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Безопасность</h2>
        <offset-block header="Следим за безопасностью" image="/images/tour_safety.jpg">
          <p>
            Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.
            <br>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс.
          </p>
        </offset-block>
      </div>
    </section>
    <section class="section section--colored" id="about-section">
      <div class="container">
        <h2 class="section__title">Вопросы и ответы</h2>
        <!-- @changed -->
        <div class="row qa-row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="1"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="3"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="2"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
            <card
              :title="'Есть ли у гида ружье или как решается вопрос с безопасностью, касаемо медведей?'"
              :number="4"
            >Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей.</card>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Отзывы</h2>
        <app-default-slider :perPage="[[320, 1], [1024, 3]]">
          <slide v-for="(item, index) in reviews" :key="index">
            <review-card
              :image="item.image"
              :name="item.name"
              :content="item.content"
              :tourName="item.tourName"
            />
          </slide>
        </app-default-slider>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section__title">Условия оплаты</h2>
        <offset-block
          header="Условия оплаты тура"
          image="/images/tour_payment.jpg"
          :reversed="true"
        >
          <p>Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых.</p>
          <p>Мы предлагаем выгодные условия оплаты услуг.</p>
        </offset-block>
      </div>
    </section>
    <section class="section section--colored">
      <div class="container">
        <h2 class="section__title">Интересные предложения</h2>
        <app-default-slider :perPage="[[320, 1], [767, 2], [1024, 4]]">
          <slide v-for="item in $store.getters.data" :key="item._id">
            <product-card :data="item" :fixedWidth="true"/>
          </slide>
        </app-default-slider>
      </div>
    </section>
    <section class="section section-map">
      <div class="container">
        <h2 class="section__title">Карта</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.8288519876903!2d30.350945916095462!3d59.90179058186283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696303831e879ff%3A0x9a64aeab036ef0f2!2sKamchatskaya+Ulitsa%2C+Sankt-Peterburg%2C+Russia%2C+192007!5e0!3m2!1sen!2sua!4v1560589337727!5m2!1sen!2sua"
        width="100%"
        height="500px"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </section>
    <!-- @changed -->
  </div>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard.vue";
import TogglerVue from "../components/Blocks/Toggler.vue";
import ReviewCardVue from "../components/Blocks/ReviewCard.vue";
import AdvancedTabsVue from "../components/Blocks/AdvancedTabs.vue";
import ContentTabVue from "../components/Blocks/ContentTab.vue";
import HeaderBreadsVue from "../components/Header/HeaderBreads.vue";
import DifficultyListVue from "../components/Lists/DifficultyList.vue";
export default {
  name: "single-page",
  components: {
    "product-card": ProductCard,
    toggler: TogglerVue,
    "review-card": ReviewCardVue,
    "advanced-tabs": AdvancedTabsVue,
    "content-tab": ContentTabVue,
    breadcrumbs: HeaderBreadsVue,
    "difficulty-list": DifficultyListVue
  },
  data() {
    return {
      data: null,
      successPopup: false,
      formPopup: false,
      photos: [
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        },
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        },
        {
          image: "/images/tour_photo.jpg",
          url: "#"
        }
      ],
      videos: [
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        },
        {
          image: "/images/tour_video.jpg",
          url: "#"
        }
      ],
      reviews: [
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        },
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        },
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        },
        {
          image: "/images/review.png",
          name: "Андрей Савицкий",
          content:
            "Провел отличный отпуск на Камчатке. Гид оказался квалифицированным специалистом. Всё очень достойно и интересно. Рекомендую!",
          tourName: "Тур по Камчатке"
        }
      ],
      toggled: false,
      currentSelectValue: null
    };
  },
  methods: {
    // @changed
    getData(_id) {
      this.data = this.$store.getters.data.filter(i => i._id === _id)[0];
    },
    slideTo(selector) {
      if (jQuery) {
        const target = jQuery(selector);
        return new Promise(resolve => {
          jQuery("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            300,
            () => resolve()
          );
        });
      }
    },
    slideToToggler(e, index = 0) {
      e.preventDefault();
      this.slideTo("#photo-video-slider").then(() => {
        this.$refs.toggler.toggle(index);
      });
    },
    toggle() {
      jQuery(this.$refs.dropdown).slideToggle(300);
      this.toggled = !this.toggled;
    },
    dropdownSelect(option) {
      this.currentSelectValue = option.value;
      this.toggle();
    },
    callPopup() {
      this.$store.commit("OPEN_POPUP", this.data);
    }
  },
  mounted() {
    const _id = this.$route.params.id;
    this.getData(_id);
  }
};
</script>

<style lang="scss">
.single {
  position: relative;
  @media screen and (max-width: 1024px) {
    margin-top: 66px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 62px;
  }
  /* @changed */
  .author {
    &__row {
      @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: row;

        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          strong {
            font-size: 18px;
          }
          .stars {
            justify-content: center;

            li {
              margin-right: 3px;
              i {
                font-size: 20px;

                &.active {
                  color: #e5ac00;
                }
              }
            }
          }
        }
      }
    }
  }

  &__place {
    position: absolute;
    width: 100%;
    height: auto;
    padding: 8px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 200;
    i {
      display: inline-block;
      font-size: 20px;
      margin-right: 10px;
    }
  }
}

.intro-slider-line {
  &__links {
    a {
      display: inline-block;
    }
    > div {
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }

  &__row {
    @media screen and (max-width: 767px) {
      padding: 0 10px;
    }
  }

  .button,
  .advanced-select {
    @media screen and (max-width: 1024px) {
      align-self: center;
      min-width: 200px;
    }
    @media screen and (max-width: 767px) {
      min-width: 100%;
    }
  }

  > .container {
    @media screen and (max-width: 1200px) {
      max-width: 1140px;
    }
  }
}

.single-subtitle {
  position: relative;
  padding: 37px 0 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 800;
    color: #cacaca;
    font-size: 36px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  p {
    padding: 0;
    margin: 15px 0;

    color: #646464;
    font-weight: 600;
  }

  &::after {
    content: "";
    position: absolute;
    width: 48px;
    height: 1px;
    background-color: #000;
    left: 0;
    bottom: 0;
  }
}

.row.intro-subtext__row {
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .col-md-7 {
      margin-left: auto;
      max-width: 50%;

      .single-subtitle {
        h3 {
          font-size: 24px;
        }
        p {
          font-weight: lighter;
        }

        &::after {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .col-md-7 {
      max-width: 100%;
      padding: 0 25px;

      .single-subtitle {
        h3 {
          font-size: 48px;
        }
        p {
          font-size: 18px;
          font-weight: lighter;
        }

        &::after {
          display: none;
        }
      }
    }
  }
}

.program-slider {
  &.VueCarousel {
    position: relative;
    .VueCarousel-slide {
      min-height: 600px;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      padding-bottom: 50px;

      align-items: center;
      text-align: center;
      color: #ffffff;

      @media screen and (max-width: 768px) {
        max-height: 470px;
      }

      .content {
        max-width: 600px;
        h4 {
          font-weight: bold;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }

    .VueCarousel-pagination {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      .VueCarousel-dot {
        width: 14px !important;
        height: 14px !important;
        padding: 0 6px !important;
        background-color: #fff !important;
        &--active {
          background-color: #0dba00 !important;
        }
      }
    }

    .VueCarousel-navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 0 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      max-width: 1140px;
      @media screen and (max-width: 1200px) {
        max-width: 960px;
      }
      @media screen and (max-width: 992px) {
        max-width: 720px;
      }
      @media screen and (max-width: 567px) {
        max-width: 540px;
      }
      &-button {
        position: relative !important;

        width: 35px;
        height: 35px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        opacity: 1;
        transform: none !important;
        &::after {
          width: 18px;
          height: 18px;
          left: 50%;
          filter: invert(13%) sepia(94%) saturate(0%) hue-rotate(232deg)
            brightness(101%) contrast(101%);
          transform: translateX(-50%) translateY(-50%);
        }
      }
      &-next {
        &::after {
          background-position: 1px center;
        }
      }
    }
  }
}

.photo-slider {
  margin-top: 50px;

  .VueCarousel {
    &-navigation {
      &-button {
        top: 30% !important;
      }
    }
  }

  &__card {
    width: 100%;
    position: relative;
    @media screen and (max-width: 767px) {
      max-width: 250px;
      margin: 0 auto;
    }
    img {
      width: 100%;
      height: auto;
    }

    &-mask {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;

      padding: 0 25px;

      position: absolute;
      top: 0px;
      left: 0px;

      background-color: rgba(0, 0, 0, 0.7);

      text-align: center;

      opacity: 0;
      transition: opacity 0.3s ease-in-out;

      .button {
        display: inline-flex;
        justify-content: center;
        padding: 12px 15px;

        @media screen and (max-width: 767px) {
          padding: 12px 5px;
        }

        .svg-inserted {
          display: inline-flex;
          justify-content: center;
          flex-direction: column;
          margin-right: 10px;
        }

        &:hover {
          .svg-inserted {
            svg {
              fill: #000 !important;
            }
          }
        }
      }
    }
    &:hover {
      .photo-slider__card-mask {
        opacity: 1;
      }
    }
  }
}

.qa-row,
.program-row,
.about-row {
  @media screen and (max-width: 1024px) {
    flex-direction: column;

    &.program-row {
      flex-direction: column-reverse;

      iframe {
        height: 400px;
        margin-top: 50px;
      }
    }

    > div {
      width: 100%;
      max-width: 100%;
      flex: none;
    }
  }
}

.about-row {
  ul {
    padding-left: 0px;
  }
}

.about-item {
  text-align: center;
  margin-bottom: 30px;

  h4 {
    font-size: 20px;
    color: #0a6aa8;
    font-weight: 600;

    position: relative;
    padding: 0 0 15px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background-color: #0a6aa8;
    }
  }

  p {
    font-size: 14px;
    max-width: 300px;
    margin: 0 auto;
  }
  /* @changed */
  &-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.qa-row {
  &:last-child {
    > div:nth-child(odd):last-child {
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.mobile-hide {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.full-window-slider {
  min-height: 640px;

  .full-window-slider__card-wrapper {
    @media screen and (max-width: 560px) {
      padding: 0px;
    }
    @media screen and (max-width: 767px) {
      max-width: 100%;
      padding: 0;
    }
  }

  /* @changed */

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  &-wrapper {
    position: relative;
  }

  &__slide {
    position: relative;
    min-height: 680px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &-content {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      text-align: center;
      z-index: 15;

      color: #fff;

      @media screen and (max-width: 1150px) {
        width: 80%;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0 25px;

        .button {
          width: 100%;
        }
      }

      /* @changed */
      &-adv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        span {
          display: block;
          padding: 0 10px;
          flex: 1;
        }
      }

      .slide__iconed-text {
        display: inline-block;
        font-size: 20px;
        vertical-align: middle;
        img {
          height: 35px;
          width: auto;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }

        @media screen and (max-width: 1024px) and (min-width: 768px) {
          img {
            display: block;
            margin: 0 auto 5px;
          }
        }

        @media screen and (max-width: 767px) {
          margin-bottom: 10px;
          min-width: 190px;
          text-align: left;
        }
      }

      .slide__title {
        font-size: 36px;
        font-weight: bolder;
        margin-bottom: 40px;

        @media screen and (max-width: 560px) {
          font-size: 32px;
        }
      }

      .slide__description {
        font-size: 16px;
        max-width: 400px;
        margin: 20px auto 50px;

        @media screen and (max-width: 560px) {
          font-size: 20px;
          font-weight: lighter;
        }
      }
    }
  }

  .container {
    position: relative;
  }

  &__card {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    max-width: 450px;
    transform: translateY(55%);
    z-index: 113;

    @media screen and (max-width: 1024px) {
      max-width: 50%;
      transform: translateY(80%);
      min-width: 350px;
    }

    @media screen and (max-width: 767px) {
      max-width: 100%;
      position: static;
      transform: none;
      &-body {
        box-shadow: none;
      }

      &-footer {
        box-shadow: none;
      }
    }

    &-breads {
      /* @changed */
      padding: 4px 0 8px;
      a {
        font-weight: lighter;
        font-size: 14px;

        &::after {
          margin-left: 8px !important;
          margin-right: 8px !important;
        }
      }
    }

    &-body {
      background: #fff;
      padding: 20px 25px 15px;
      box-shadow: 2.5px -10px 7px 0px rgba(0, 0, 0, 0.2);

      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 25px;
        width: 43px;
        height: 4px;
        background-color: #0dba00;
      }

      > ul {
      }
    }

    &-footer {
      background: #fff;
      padding: 0px 25px;
      box-shadow: 2.5px 6.23px 7px 0px rgba(0, 0, 0, 0.2);
      &__content {
        padding: 15px 0 20px;
        border-top: 1px solid #e7e7e7;
      }
      p {
        line-height: 100%;
        font-weight: 300;
        small {
          font-size: 13px;
        }
      }
    }
  }
  small {
    display: block;
    color: #8c8c8c;
    font-weight: lighter;
    font-size: 14px;
  }
  &-card__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

    h5 {
      font-weight: 600;
      font-size: 27px;
      margin-bottom: 0px;
    }

    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .image-list {
        display: flex;
        justify-content: space-between;
        span {
          position: relative;
          img {
            width: auto;
          }

          &:not(:last-child) {
            padding-right: 16px;
            margin-right: 16px;

            &::after {
              content: "";
              position: absolute;
              width: 8px;
              height: 8px;
              right: -4px;
              top: 50%;
              transform: translateY(-50%);
              background-color: #0dba00;
              border-radius: 50%;
            }
          }
        }
      }
    }

    .left {
      font-size: 16px;
    }

    .right {
      strong {
        font-size: 18px;
      }
    }
  }

  .VueCarousel {
    &-dot {
      transform: scale(1.1) !important;
      outline: none;
      &--active {
        background-color: #0dba00 !important;
      }

      @media screen and (max-width: 560px) {
        margin-right: 3px;
        transform: scale(1.2) !important;
        &:not(.VueCarousel-dot--active) {
          background-color: #fff !important;
        }
      }
    }
    &-navigation {
      &-prev {
        left: 5% !important;
      }
      &-next {
        right: 9% !important;
      }
      @media screen and (max-width: 768px) {
        &-prev {
          left: 5% !important;
        }
        &-next {
          right: 9% !important;
        }
      }
    }
    &-pagination {
      position: absolute !important;
      z-index: 113 !important;
      bottom: 30px !important;
      right: 13% !important;
      width: auto !important;

      @media screen and (max-width: 560px) {
        right: 50% !important;
        transform: translateX(50%);
      }
    }
  }
}

.author-content__image,
.team-item__image {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto 20px;
}

.author-content,
.team-item {
  text-align: center;
  h4 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    max-width: 800px;
    margin: 10px auto 0px;
    &.small {
      margin-top: 0px;
      color: #858585;
    }
  }
}

.team-item {
  &__image {
    width: 170px;
    height: 170px;
  }
  p {
    @media screen and (max-width: 768px) {
      max-width: 400px;
    }
  }
}

.team-slider {
  pointer-events: none;

  @media screen and (max-width: 768px) {
    pointer-events: all;
  }
}

.section.equip {
  /* @changed */
  .about-item {
    flex: 1;
    margin-bottom: 30px;
    min-width: 33%;
    @media screen and (max-width: 768px) {
      min-width: 50%;
    }
    @media screen and (max-width: 576px) {
      min-width: 100%;
    }
    h4 {
      color: #000;
      padding-bottom: 10px;

      &::after {
        width: 50px;
        background-color: #0dba00;
      }
    }
  }
}
</style>
