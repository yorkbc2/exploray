<template>
    <article class="review-card">
        <div class="review-card__image">
            <img :src="image" alt="" :title="name" />    
        </div>    
        <h3 class="review-card__title">
            {{name}}
        </h3>
        <p class="red review-card__tour">
            {{tourName}}
        </p>
        <p class="review-card__content">
            {{content}}
        </p>
    </article>    
</template>

<script>
export default {
    props: {
        image: String,
        tourName: String,
        name: String,
        content: String
    }
}
</script>

<style lang="scss" scoped>
    .review-card {
        margin: 0 auto;
        text-align: center;
        max-width: 280px;
        &__image {
            width: 120px;
            height: 120px;
            margin: 0 auto 15px;
            img {
                width: 100%;
                height: auto;
            }
        }

        &__tour {
            color: #af2727;
        }

        &__content {
            font-size: 14px;
        }

        &__title {
            position: relative;
            font-size: 18px;
            font-weight: 700;
            padding-bottom: 15px;
            margin-bottom: 10px;
            &::after {
                content: "";
                position: absolute;
                left: 50%;
                bottom: 0px;
                transform: translateX(-50%);
                width: 40px;
                height: 2px;
                background-color: #000;
            }
        }
    }
</style>
