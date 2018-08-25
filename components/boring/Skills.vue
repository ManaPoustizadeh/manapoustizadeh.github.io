<template>
    <div class="container p-2">
        <SkillRow v-for="skillSet in skillSets" :skillSet="skillSet" :key="skillSet.id" />
    </div>
</template>
<script>
import records from '~/static/records.json';
import SkillRow from '~/components/boring/SkillRow';
export default {
    components: {
        SkillRow,
    },
    data() {
        return {
            skillSets: records.Skills,
        }
    },
}
</script>
<style scoped>
    .container{
        height: 80vh;
        overflow-y: auto;
    }
</style>

