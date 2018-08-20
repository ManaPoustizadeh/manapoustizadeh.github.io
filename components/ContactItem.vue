<template>
    <b-card class="mb-2 contact">
        <div class="card-text">
            <a :href="contact.url" :key="contact.title + contact.value">
                <div class="menu-item">
                    <fa v-if="contact.type === 'github'" :icon="faGithub" size="2x"></fa>
                    <fa v-if="contact.type === 'linkedin'" :icon="faLinkedin" size="2x"></fa>
                    <fa v-if="contact.type !== 'linkedin' && contact.type !== 'github'" :icon="contact.icon" size="2x"></fa>
                    <span class="name">{{contact.title}}</span>
                    <div v-if="!contact.hidden" class="value">{{contact.value}}</div>
                    <div v-else class="value">Request Info</div>
                </div>
            </a>
        </div>
    </b-card>
</template>
<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default {
    props: {
        contact: Object,
    },
    computed: {
        fas() {
            return fas
        }, 
        faGithub() {
            return faGithub
        },
        faLinkedin() {
            return faLinkedin
        },
    }
}
</script>

<style scoped>
    .contact {
        width: 11rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 0.25rem;
        margin-left: 0.25rem;
    }
    .name {
        margin-top: 0.5rem;
        text-align: center;
    }
    .value {
        margin-top: 0;
        text-align: center;
    }
    .menu-item {
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        transition: 0.4s ease;
        color: #202020;
    }
    .card-text {

    }
</style>

