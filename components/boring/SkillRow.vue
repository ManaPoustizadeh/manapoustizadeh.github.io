<template>
    <div class="swiper-parent my-4 px-0">
        <h3 class="mb-2">{{skillSet.title}}</h3>
        <hr class="horizontal-line mb-3">
        <span v-for="(skill, index) in skillSet.skills" :key="skill.id" class="text-white">
            {{skill.title}}
        <span v-if="index+1 !== skillSet.skills.length">
            ,
        </span>
        </span>
        <!-- <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div v-for="skill in skillSet.skills" :key="skill.id" class="card shadow swiper-slide text-dark">
                <img class="card-img-top" src="https://cythilya.github.io/assets/2017-05-21-vue-logo.png" :alt="skill.title">
                <div class="card-body">
                    <h5 class="card-title">{{skill.title}}</h5>
                    <p class="card-text">
                        {{skill.description}}
                    </p>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </div> -->
    </div>
</template>
<script>
import SkillCard from '~/components/boring/SkillCard';
export default {
    components: {
        SkillCard,
    },
    props: {
        skillSet: Object,
    },
    data() {
        let swiperOption = {
          loop: false,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 20,
          grabCursur: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        };
        return {
            swiperOption,
        }
    }
}
</script>
<style scoped>
    .card {
        min-width: 200px;
        height: 200px;
    }
    .swiper-slide {
        width: fit-content;
        height: 200px;
    }
    .card-img-top {
        height: 100px;
        width: auto;
    }
    .horizontal-line {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 140px;
        margin-left: 0;
        border-top-color: rgba(255,255,255, 0.5);
    }
</style>


