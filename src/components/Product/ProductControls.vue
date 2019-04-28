<template>
    <div class="product-controls d-flex justify-content-between">
        <div class="product-controls__sort"></div>
        <div class="product-controls__actions">
            <button @click="toggle(false)">
                <icon name="squares" />
            </button>
            <button @click="toggle(true)">
                <icon name="bars" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggle(enable) {
            this.$store.commit(enable ? 'enableStrokeView' : 'disableStrokeView');
        }
    }
}
</script>

<style lang="scss">

</style>
