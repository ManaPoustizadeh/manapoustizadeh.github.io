<template>
    <b-card class="mb-2 contact">
        <p class="card-text">
            <a :href="contact.url" :key="contact.title + contact.value">
                <div class="menu-item">
                    <fa :icon="contact.icon" size="2x"></fa>
                    <span class="name">{{contact.title}}</span>
                </div>
            </a>
        </p>
    </b-card>
</template>
<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
export default {
    props: {
        contact: Object,
    },
    computed: {
        fas() {
            return fas
        }, 
        fab() {
            return fab
        }
    }
}
</script>

<style scoped>
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
</style>

