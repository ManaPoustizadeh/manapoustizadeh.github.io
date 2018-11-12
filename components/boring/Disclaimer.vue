<template>
    <div class="container py-2">
        <h1 class="mb-2 justify-self-left text-left">Disclaimer</h1>
        <hr class="horizontal-line mb-3">
        <div class="d-flex flex-column award justify-content-center">
            <div class="my-1">
                <h3 class="disc-title">About This Site</h3>
                <p>
                    This website was built using <a href="https://nuxtjs.org">Nuxt.js</a> which 
                    is a <a href="https://vuejs.org/v2">Vue</a> framework. All the coding for the components 
                    and all the styling was done using <a href="https://sass-lang.com/">SCSS</a> and 
                    <a href="https://getbootstrap.com/docs/4.1/">Bootstrap</a> was the main styling library of choice.<br/>
                    The website was built with <span class="heart">&hearts;</span> and if you plan to use the codes
                    please name the template owner that is <a href="https://github.com/ManaPoustizadeh">Mana Poustizadeh</a>.
                </p>
            </div>
            <div class="my-1">
                <h3 class="disc-title">Icons</h3>
                <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        </div>
    </div>
</template>

<script>
</script>
<style scoped>
    a, a:hover, a:visited {
        color: black;
    }
    .heart {
        color: red;
    }
    .container{
        height: 84vh;
    }
    .horizontal-line {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 140px;
        margin-left: 0;
        border-top-color: rgba(255,255,255, 0.5);
    }
    .award{
        font-size: 0.9rem;
        font-weight: 100;
    }
</style>


