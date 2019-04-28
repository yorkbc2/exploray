<template>
    <div class="row">
        <div v-for="(item, index) in data" :class="{'col-md-4 col-xs-12 col-sm-6': !strokeView, 'col-md-12': strokeView}" :key="index">
            <product-card :data="item" :strokeView="strokeView" />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
    props: {
        data: Array,
        strokeView: Boolean
    },
    components: {
        ProductCard
    },
    mounted() {
    }
}
</script>