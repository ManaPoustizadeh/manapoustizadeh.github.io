<template>
    <div class="fixed-bottom border-top border-light py-2 px-0">
        <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
        <div class="swiper-slide rounded" v-for="menu in menus" :key="menu">
            <div class="menu p-2 rounded">{{menu}}</div>
        </div>
        </div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        let menus = [
            'one', 
            'two',
            'three',
        ];
        let swiperOption = {
          loop: false,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          grabCursur: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        };
        return {
            menus,
            swiperOption,
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu {
        background-color: rgba(255, 255, 255, 0.06);
        color: hsla(0,0%,100%,.6);
        min-width: 100px;
    }
    .my-swiper {
        height: 200px;
        width: 100%;
        .swiper-slide {
            text-align: center;
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20%;
        }
    }
    .swiper-slide {
        text-align: center;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
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


