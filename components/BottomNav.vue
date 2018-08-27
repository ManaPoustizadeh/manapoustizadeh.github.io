<template>
    <div class="fixed-bottom bg-primary border-top border-light py-2 px-0">
        <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
        <div class="swiper-slide rounded" v-for="(menu,index) in menus" :key="menu.name">
            <div role="button" :class="{menu: true, 'p-3': true, rounded: true, clicked: menu.active}" @click="() => clicked(index)">{{menu.name}}</div>
        </div>
        </div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        menus: Array,
    },
    data() {
        let swiperOption = {
          loop: false,
          slidesPerView: 'auto',
          centeredSlides: false,
          spaceBetween: 10,
          grabCursur: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        };
        return {
            swiperOption,
        }
    },
    methods: {
        clicked(menu){
            this.$emit('goToCategory', menu);
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu {
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.06);
        height: 55px;
        position: relative;
        cursor: pointer;
        bottom: 0;
        color: hsla(0,0%,100%,.7);
        min-width: 100px;
        transition: 0.3s ease;
    }
    .menu:hover {
        bottom: 5px;
        transition: 0.3s ease;
        background: hsla(0,0%,100%,.2);
    }
    .menu.clicked {
        transition: 0.3s ease;
        background: hsla(0,0%,100%,.2);
    }
    .my-swiper {
        height: 50px;
        width: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 0.8rem;
        height: 60px;
        font-weight: 100;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        min-width: 100px;
        width: fit-content;
        background-color: transparent;
    }
    .swiper-button-prev, .swiper-button-next {
        width: 16px;
        height: 24px;
        margin-top: -11px;
        background-size: 16px 24px;
    }
</style>


