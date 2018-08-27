<template>
    <div class="row">
        <div class="right-text text-md-left text-sm-center col-sm-3 col-md-3 d-flex p-3 ">
            <div class="d-flex flex-row flex-md-column w-100  justify-content-around">
                <div class="button rounded col-sm-3">
                    <div :class="{menu: true, 'p-3 my-1': true, rounded: true, clicked: index === 0}" @click="() => clicked(0)">
                        <img class="img-fluid" src="~/assets/img/education.svg" height="80px" alt="Teaching">
                        <div class="mt-2">Teaching</div>
                    </div>
                </div>
                <div class="button rounded col-sm-3">
                    <div :class="{menu: true, 'p-3 mb-1': true, rounded: true, clicked: index === 1}" @click="() => clicked(1)">
                        <img class="img-fluid" src="~/assets/img/work.svg" height="80px" alt="Teaching">
                        <div class="mt-2">
                            Industry
                        </div>
                    </div>
                </div>
                <div class="button rounded col-sm-3">
                    <div :class="{menu: true, 'p-3': true, rounded: true, clicked: index === 2}" @click="() => clicked(2)">
                        <img class="img-fluid" src="~/assets/img/executive.svg" height="80px" alt="Teaching">
                        <div class="mt-2">
                            Executive
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
        </div>
        <div class="left-image col-sm-12 col-md-9">
            <div class="work">
                <NewTimeline :items="Records" />
            </div>
        </div>
    </div>
</template>
<script>
import NewTimeline from '~/components/boring/NewTimeline';
import records from '~/static/records.json';
export default {
    components: {
        NewTimeline,
    },
    data() {
        return {
            teachingRecords: records.Teaching,
            workRecords: records.Working,
            executiveRecords: records.Executive,
            index: 0,
        }
    },
    computed: {
        Records(){
            if(this.index === 0)
                return this.teachingRecords;
            else if(this.index === 1)
                return this.workRecords;
            else if(this.index === 2)
                return this.executiveRecords;
        }
    },
    methods: {
        clicked(index) {
            this.index = index;
        }
    }
}
</script>
<style scoped>
    .card-text {
        min-height: 400px;
    }
    .work {
        display: flex;
        flex: auto;
        flex-direction: column;
        overflow-y: auto;
        max-height: 80vh;
    }
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.3);
        min-height: 55px;
        position: relative;
        cursor: pointer;
        bottom: 0;
        color: hsla(0,0%,100%,.7);
        min-width: 100px;
        transition: 0.3s ease;
    }
    .menu:hover {
        bottom: 5px;
        transition: 0.3s ease;
        background: hsla(0,0%,100%,.5);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .15) 
    }
    .menu.clicked {
        transition: 0.3s ease;
        background: hsla(0,0%,100%,.5);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .15) 
    }
    .button {
        text-align: center;
        font-size: 0.8rem;
        min-height: 60px;
        font-weight: 100;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        min-width: 120px;
        /* width: fit-content; */
        background-color: transparent;
    }
</style>


