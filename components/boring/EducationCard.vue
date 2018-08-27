<template>
    <div class="card bg-primary shadow-sm mb-2">
        <div class="row card-row">
            <div class="col-xs-3 bg-white rounded-left p-3 d-flex justify-content-center align-items-center">
                <img v-if="title === 'Bachelor of Science'" class="rounded img-fluid logo" src="~/assets/img/aut.png" alt="AUT" />
                <img v-else src="~/assets/img/abureyhan.png" class="rounded logo img-fluid"  :alt="title" /> 
            </div>
            <div class="col description p-2">
                <h6>{{title}}</h6>
                <div>{{location}}</div>
                <div>{{duration}}</div>
                <div>{{major}}</div>
                <div v-if="minor">{{minor}}</div>
                <div>{{GPA}}</div>
                <p v-if="description">{{describtion}}</p>
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
        major: String,
        minor: String,
        GPA: String,
        describtion: String,
        logo: String,
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .description p, .description div {
        font-size: 0.6rem;
    }
    .logo {
        max-width: 80px;
    }
</style>

