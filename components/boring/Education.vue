<template>
    <div class="mother-row row py-md-2 py-sm-0">
        <div class="left-image col-md-6 col-sm-12">
            <img class="img-fluid" src="~/assets/img/book.png" alt="Education" />
        </div>
        <div class="right-text text-md-left text-sm-center col-md-6 col-sm-12 p-3"> 
            <div class="card bg-primary shadow-sm">
                <div class="row card-row">
                    <div class="col-xs-3 bg-white rounded-left p-3 d-flex justify-content-center align-items-center">
                        <img class="rounded img-fluid logo" src="~/assets/img/aut.png" alt="AUT" /> 
                    </div>
                    <div class="col description p-2">
                        <h6>Bachelor of Science</h6>
                        <div>Amirkabir University of Technology</div>
                        <p>jhgjhg jhgjhg khkjh jlkl lklkj kjkh kjkh kjlkj kjhkjh kjkh khljl</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container {
        /* height: 80vh; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mother-row {
        min-height: 78vh;
    }
    .left-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .images-container {
        padding: 0.5rem;
        position: relative;
        height: 390px;
        width: 340px;
    }
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


