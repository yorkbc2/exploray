<template>
    <label class="checkbox">
        <span>{{label}}</span>
        <input type="checkbox" @change="onCheck" :checked="$data._checked" :value="label" />    
    </label>    
</template>

<script>
export default {
    props: {
        change: Function,
        checked: Boolean,
        label: String
    },
    data: () => ({
        _checked: false
    }),
    methods: {
        onCheck(e) {
            this._checked = !this._checked;
            this.$emit('change', e.target.value);
        }
    },
    mounted() {
        this._checked = this.checked;
    }
}
</script>

<style lang="scss" scoped>
    input {
        &::before,
        &::after {
            content: "";
            position: absolute; 
            display: block;
        }

        &::before {
            width: 12px;
            height: 12px;
            background: #fff;
            border: 1px solid #000;
        }

        &::after {
            background-image: url('/icons/check.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 11px;
            height: 9px;
            top: 1.5px;
            left: 1px;
            display: none;
        }

        &:checked {
            &::after {
                display: block;
            }
        }
    }
</style>
