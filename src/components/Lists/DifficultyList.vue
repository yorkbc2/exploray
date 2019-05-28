<template>
    <ul class="difficulty-list">
        <li v-for="index in value" :key="index">
            <img :src="difficultyImage" alt="" />
        </li>
    </ul>
</template>

<script>
export default {
    name: 'difficulty-list',
    props: {
        value: Number
    },
    computed: {
        difficultyImage() {
            switch (this.value) {
                case 1:
                    return '/images/exploray_green.png';
                case 2:
                    return '/images/exploray_yellow.png';
                case 3:
                    return '/images/exploray_orange.png';
                case 4:
                    return '/images/exploray_red.png';
            }
        }
    }
}
</script>

<style lang="scss">
    .difficulty-list {
        margin: 0;
        padding: 0;

        li {
            list-style: none;
            display: inline-block;

            &:first-child {
                img {
                    margin-left: 0px;
                }
            }

            img {
                height: 30px;
                width: auto;
                margin-left: 5px;
            }
        }
    }
</style>