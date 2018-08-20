<template>
    <div id="TA">
        <b-card title="Teaching Experience" class="mb-2">
            <div class="work card-text">
                <Timeline :educationRecords="TARecords" />
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
        TARecords: Array,
    }
}
</script>

<style scoped>
    .card-text {
        min-height: 400px;
    }
</style>

