<template>
    <div id="education">
        <b-card class="mb-2" title="Educational Background">
            <div class="education card-text">
                <Timeline :educationRecords="educationRecords" />
            </div>
        </b-card>
    </div>
</template>
<script>
import Timeline from '~/components/Timeline';
export default {
    components: {
        Timeline,
    },
    props: {
        educationRecords: Array,
    }
}
</script>

<style scoped>
    .card-text {
        min-height: 400px;
    }
</style>

