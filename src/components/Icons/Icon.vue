<template>
    <img-to-svg v-if="src" :src="src" :width="24" :height="24" fill="#fff" hoverFill="#ececec" :styles="styles" />
</template>

<script>
export default {
    props: {
        name: String
    },
    data: () => ({
        icons: {
            'facebook': '/icons/facebook.svg',
            'instagram': '/icons/instagram.svg',
            'vk': '/icons/vk.svg',
            'search': '/icons/search.svg',
            'libra': '/icons/libra.svg'
        },
        src: '',
        styles: {},
        additionalStyles: {
            'vk': {
                width: '34px',
                height: '34px',
                transform: 'translateY(5px)'
            }
        }
    }),
    mounted() {
        this.src = this.icons[this.name] || '';
        this.styles = this.additionalStyles[this.name] || {};
    }
}
</script>