<template>
    <div class="tab">
        <h3 @click="open">
            {{header}}

            <i v-if="!isOpened" class="fa fa-chevron-down"></i>
            <i v-else class="fa fa-chevron-up"></i>
        </h3>
        <div ref="content" class="tab__content" style="display: none;">
            <slot />
        </div>
    </div>
</template>


<script>
export default {
    name: 'tab',
    props: {
        header: String,
        isOpened: false
    },
    methods: {
        open() {
            this.isOpened = !this.isOpened;
            jQuery(this.$refs.content).slideToggle(300);
        }
    }
}
</script>

<style lang="scss">
    .tab {
        h3 {
            position: relative;
            margin: 0;
            padding: 10px 5px;
            font-size: 16px;
            font-weight: lighter;
            transition: all 0.3s ease-in-out;
            cursor: pointer;


            i {
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
                color: #8e8e8e;
            }

            &:hover {
                background-color: #f7f7f7;
            }
        }
        &__content {
            padding: 15px 0;
        }
        border-bottom: 1px solid #e7e7e7;
    }
</style>
