<template>
    <div class="container py-2">
        <h1 class="mb-2 justify-self-left text-left">Awards</h1>
        <hr class="horizontal-line mb-3">
        <div class="d-flex flex-column award justify-content-center h-100">
            <div class="my-1" v-for="award in awards" :key="award.id">
                &#127942;
                <span v-html="award.title"></span>,
                <strong><span v-html="award.location"></span></strong>,
                <strong><span v-html="award.time"></span></strong>
            </div>
        </div>
    </div>
</template>

<script>
import records from '~/static/records.json';
export default {
    data(){
        return {
            awards: records.Awards,
        }
    }
    
}
</script>
<style scoped>
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


