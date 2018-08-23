<template>
    <div class="mother-row row py-md-2 py-sm-0">
        <div class="left-image col-md-6 col-sm-12">
            <img class="img-fluid" src="~/assets/img/book.png" alt="Education" />
        </div>
        <div class="right-text text-md-left text-sm-center col-md-6 col-sm-12 p-3"> 
            <EducationCard v-for="record in educationRecords" 
                           :key="record.title"
                           :title="record.titleDescription"
                           :location="record.location"
                           :duration="record.timespan"
                           :major="record.major"
                           :minor="record.minor"
                           :GPA="record.GPA" />
        </div>
    </div>
</template>
<script>
import records from '~/static/records.json';
import EducationCard from '~/components/boring/EducationCard';
export default {
    components: {
        EducationCard,
    },
    data() {
        return {
            educationRecords: records.Education,
        }
    }
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
</style>


