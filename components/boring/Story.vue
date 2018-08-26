<template>
    <div class="container p-2">
        <div class="title mb-3">
            <h2 class="mb-2">My Story</h2>
            <hr class="horizontal-line mb-3"> 
        </div>
        <div class="row mb-4">
            <div class="col-sm-12 col-md-9">
                <p>{{parahraphs[0].text}}</p>
            </div>
            <div class="col-sm-12 col-md-3 d-md-block d-flex justify-content-center">
                <img class="potter" src="~/assets/img/potter.svg" alt="potter">
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-12">
                <p>{{parahraphs[1].text}}</p>
            </div>
            <div class="col-sm-12 col-md-3 d-md-block d-flex mb-3 mb-md-0 justify-content-center">
                <img class="team" src="~/assets/img/teamwork.svg" alt="teamwork">
            </div>
            <div class="col-sm-12 col-md-9">
                <p>{{parahraphs[2].text}}</p>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-sm-12 col-md-9">
                <p>{{parahraphs[3].text}}</p>
            </div>
            <div class="col-sm-12 col-md-3 d-md-block d-flex mb-3 mb-md-0 justify-content-center">
                <img class="game" src="~/assets/img/game.svg" alt="game">
            </div>
        </div>
        <div class="ps">
            <p>
                {{parahraphs[4].text + ' '}}&#128526;
            </p>
        </div>
    </div>
</template>
<script>
import records from '~/static/records.json';
export default {
    data() {
        return {
            parahraphs: records.Story,
        }
    }
}
</script>
<style scoped>
    .container {
        max-height: 80vh;
        overflow: auto;
    }
    .horizontal-line {
        margin-top: 0.2rem;
        margin-bottom: 0.5rem;
        width: 110px;
        margin-left: 0;
        border-top-color: rgba(255,255,255, 0.5);
    }
    .potter {
        margin-top: 1rem;
        height: 100px;
        width: auto;
    }
    .team {
        margin-top: 1rem;
        height: 120px;
        width: auto;
    }
    p {
        font-weight: 200;
    }
    h2 {
        font-weight: 100;
    }
</style>


