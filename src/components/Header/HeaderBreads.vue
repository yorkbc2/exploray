<template>
    <div class="header-breads">
        <router-link v-for="(key, index) in pathKeys" :key="index" :to="key">
            {{path[key]}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'app-header-breads',
    props: {
        /**
         * {
         *  '/': Главная
         * }
         */
        path: Object
    },
    computed: {
        pathKeys() {
            console.log(this.path, Object.keys(this.path));
            return Object.keys(this.path);
        }
    }
}
</script>

<style lang="scss" scoped>
.header-breads {
    a {
        color: #fff;
        text-decoration: none;

        &:not(:last-child)::after {
            content: "\f178";
            font-family: "FontAwesome";
            position: relative;
            font-size: 16px;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
}
</style>
