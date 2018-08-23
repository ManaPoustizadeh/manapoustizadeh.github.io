<template>
    <div class="row py-md-2 py-sm-0">
            <div class="left-text text-md-left text-sm-center col-md-6 col-sm-12 p-3">
                <h2>{{name}}</h2>
                <p class="font-wight-light text-quite-light">
                    {{overview}}
                </p>
                <div class="icons">
                    <a class="icon mx-1" :href="githubAddress">
                        <fa :icon="faGithub" size="2x"></fa>
                    </a>
                    <a class="icon mx-1" :href="linkedinAddress">
                        <fa :icon="faLinkedin" size="2x"></fa>
                    </a>
                    <a class="icon mx-1" :href="TwitterAddress">
                        <fa :icon="faTwitter" size="2x"></fa>
                    </a>
                    <a class="icon mx-1" :href="InstagramAddress">
                        <fa :icon="faInstagram" size="2x"></fa>
                    </a>
                    <a class="icon mx-1" :href="EmailAddress">
                        <fa icon="envelope" size="2x"></fa>
                    </a>
                    <a class="icon mx-1" :href="EmailAddress2">
                        <fa icon="envelope" size="2x"></fa>
                    </a>
                </div>
            </div>
            <div class="right-image col-md-6 col-sm-12">
                <div class="images-container">
                    <img class="rounded image first-image shadow" rounded src="~/assets/img/mana.jpg" alt="mana" />
                    <img class="rounded image second-image shadow" rounded src="~/assets/img/mana2.jpg" alt="mana" />
                    <img class="rounded image third-image shadow" rounded src="~/assets/img/mana3.jpg" alt="mana" />
                </div>
            </div>
        </div>
</template>
<script>
import records from '~/static/records.json';
import { faGithub, faLinkedin, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
export default {
    data() {
        return {
            name: records.Name,
            overview: records.Overview,
            githubAddress: records.Contact[5].url,
            linkedinAddress: records.Contact[6].url,
            TwitterAddress: records.Contact[7].url,
            InstagramAddress: records.Contact[8].url,
            EmailAddress: records.Contact[0].url,
            EmailAddress2: records.Contact[1].url,
        }
    },
    computed: {
        faGithub() {
            return faGithub
        },
        faLinkedin() {
            return faLinkedin
        },
        faTwitter() {
            return faTwitter
        },
        faInstagram() {
            return faInstagram
        },
        faTelegram() {
            return faTelegram
        },
    },
}
</script>
<style scoped>
    .text-quite-light {
        color: hsla(0,0%,100%,.7);
    }
    .container {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .first-image {
        width: 200px;
        position: absolute;
        top: 1rem;
        right: 38%;
    }
    .image {
        width: 200px;
        position: absolute;
    }
    .second-image {
        top: 91px;
        height: 243px;
        right: 9%;
        width: auto;
    }
    .third-image {
        top: 200px;
        left: 8%;
        transform: rotate(90deg);
    }
    .right-image {
        display: flex;
        justify-content: center; 
        align-items: center;
    }
    .left-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .images-container {
        padding: 0.5rem;
        position: relative;
        height: 390px;
        width: 340px;
    }
    .icon {
        color: rgba(255, 255, 255, 0.7);
        transition: 0.3s ease;
    }
    .icon:hover {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 .125rem .25rem rgba(255,255,255,.075);
        transition: 0.3s ease;
    }
    .row {
        height: 78vh;
    }
</style>


