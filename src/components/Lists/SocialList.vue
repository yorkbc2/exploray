<template>
    <ul class="social-list">
        <li v-for="(item, index) in items" :key="index">
            <a :href="item.url">
                <icon :name="item.name" />
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'social-list',
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>
    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            display: inline-block;
            margin: 0 15px;
            transform: scale(0.9);
        }
    }
</style>