<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <a :href="index" :class="index === '/about' ? 'active' : ''">
                {{item}}
            </a>    
        </li>    
    </ul>    
</template>

<script>
export default {
    props: {
        items: Object
    }
}
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;

        margin: 0;
        padding: 0;

        li {
            list-style: none;

            margin-right: 15px;

            &:last-child {
                margin-right: 0px;
            }

            > a {
                display: inline-block;
                position: relative;
                padding: 35px 0;
                color: #fff;
                text-decoration: none;

                &.active {
                    &::after {
                        content: "";
                        position: absolute;
                        display: block;
                        width: 100%;
                        height: 2px;
                        background: #fff;
                        bottom: 0;
                        left: 0;
                    }
                }
            }
        }
    }
</style>
