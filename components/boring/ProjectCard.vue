<template>
    <div class="card project-card bg-primary shadow-sm mb-2">
        <div @click="toggle" class="row card-row">
            <div class="col-xs-3 bg-white rounded-left p-3 d-flex justify-content-center align-items-center">
                <b-img class="rounded img-fluid logo" :src="logo" :alt="title" />
            </div>
            <div class="col description p-2">
                <h6>{{title}}</h6>
                <div class="mt-0">{{location}}</div>
                <div>{{duration}}</div>
                <!-- <p v-if="description">{{describtion}}</p> -->
                <!-- <b-btn :aria-controls="title" @click="toggle" variant="primary">Show more</b-btn> -->
                <b-collapse v-model="isOpen" :id="title">
                    <p v-if="description">{{description}}</p> 
                    <a v-if="link" :href="link" target="_blank">Project Link</a>
                </b-collapse>
                <span class="more" v-if="!isOpen">
                    <fa icon="chevron-down" size="2x"></fa>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        subtitle: String,
        location: String,
        duration: String,
        description: String,
        logo: String,
        link: String,
    }, 
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle() {
            console.log('====================================');
            console.log(this.isOpen);
            console.log('====================================');
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style scoped>
    .card-row {
        width: 100%;
        position: relative;
        margin-right: 0;
        margin-left: 0;
    }
    .description {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .description div {
        font-size: 0.6rem;
    }
    .description p{
        font-size: 0.7rem;
    }
    .logo {
        max-width: 80px;
    }
    .more {
        position: absolute;
        width: 30px;
        height: 20px;
        right: 1rem;
        font-size: 0.6rem
    }
    .project-card {
        cursor: pointer;
    }
    a {
        color: white;
        font-size: 1rem;
    }
</style>

