<template>
    <inline-slider>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_1.png" alt=""><span>Походы</span></router-link>
        </slide>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_2.png" alt=""><span>Пляжи и острова</span></router-link>
        </slide>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_3.png" alt=""><span>Народности</span></router-link>
        </slide>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_4.png" alt=""><span>Кемпинг</span></router-link>
        </slide>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_5.png" alt=""><span>Дикая жизнь</span></router-link>
        </slide>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_4.png" alt=""><span>Кемпинг</span></router-link>
        </slide>
        <slide>
            <router-link to="#" class="inline-slide"><img src="/images/icon_5.png" alt=""><span>Походы</span></router-link>
        </slide>
    </inline-slider>
</template>

<script>
import InlineSlider from './InlineSlider.vue'
import { Slide } from 'vue-carousel';
export default {
    name: 'intro-inline-slider',
    components: {
        InlineSlider,
        Slide
    } 
}
</script>