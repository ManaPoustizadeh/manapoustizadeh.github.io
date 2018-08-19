<template>
    <div class="cover">
        <div class="backgroundCover"></div>
        <img src="https://media.licdn.com/dms/image/C5103AQF8wuPR938ctA/profile-displayphoto-shrink_800_800/0?e=1540425600&v=beta&t=8YZlrGlCmfzrradgYjwmCJPZGqyxRM7hcPtgSTbPFE0" class="round-image" />
        <div class="title-box">
            <h2 class="name">Mana Poustizadeh</h2>
        </div>
        <div class="badges">
            <span v-for="headline in headlines" :key="headline">
                {{headline}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        headlines: Array,
    }
}
</script>

<style scoped>
    @font-face {
        font-family: Penna;
        src: url('~/assets/fonts/penna.otf');
    }
    .badges {
        border-radius: 30px;
        font-size: 0.75rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-right: 1rem;
        padding-left: 1rem;
        background: #FFB300;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 3rem;
        position: absolute;
        bottom: 33px;
        z-index: 2;
    }
    .title-box {
        z-index: 2;
        height: 50%;
        margin-bottom: 3rem;
        padding-bottom: 1rem;
        text-align: center;
        border-bottom: 4px double;
    }
    .cover {
        min-height: 45%;
        max-height: fit-content;
        width: 100%;
        background: #ececec;
        color: #2e2e2e;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-top: 5rem;
    }
    .backgroundCover {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-image: url('~assets/img/cover.jpg');
        background-size: cover;
        filter: blur(5px);
    }
    .round-image {
        border-radius: 50%;
        -webkit-box-shadow: 0px 2px 4px -1px rgba(14,14,14,1);
        -moz-box-shadow: 0px 2px 4px -1px rgba(14,14,14,1);
        box-shadow: 0px 2px 4px -1px rgba(14,14,14,1);
        height: 10rem;
        width: 10rem;
        position: absolute;
        top: -5rem;
    }
    .name {
        font-family: Penna, sans-serif;
        font-size: 4em;
    }
</style>
