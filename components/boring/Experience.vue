<template>
    <div class="row">
        <div class="right-text text-md-left text-sm-center d-flex flex-column justify-content-center col-md-4 col-sm-12 p-3">
            <div class="button rounded">
                <div :class="{menu: true, 'p-3 mx-1': true, rounded: true, clicked: index === 0}" @click="() => clicked(0)">Teaching</div>
            </div>
            <div class="button rounded">
                <div :class="{menu: true, 'p-3': true, rounded: true, clicked: index === 1}" @click="() => clicked(1)">Work</div>
            </div>
        </div>
        <div class="left-image col-md-8 col-sm-12">
            <div class="work card-text">
                <!-- <Timeline :educationRecords="teachingRecords" /> -->
                <NewTimeline :items="teachingRecords" />
            </div>
        </div>
    </div>
</template>
<script>
import Timeline from '~/components/Timeline';
import NewTimeline from '~/components/boring/NewTimeline';
import records from '~/static/records.json';
export default {
    components: {
        Timeline,
        NewTimeline,
    },
    data() {
        return {
            teachingRecords: records.Teaching,
            index: 0,
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
        max-height: 80vh;
        overflow-y: auto;
    }
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.06);
        height: 55px;
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
        background: hsla(0,0%,100%,.2);
    }
    .menu.clicked {
        transition: 0.3s ease;
        background: hsla(0,0%,100%,.2);
    }
    .button {
        text-align: center;
        font-size: 0.8rem;
        height: 60px;
        font-weight: 100;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        min-width: 120px;
        width: fit-content;
        background-color: transparent;
    }
</style>


