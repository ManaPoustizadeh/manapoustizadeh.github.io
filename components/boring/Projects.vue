<template>
    <div class="container">
        <h1 class="mb-2">Projects</h1>
        <hr class="horizontal-line mb-3">
        <ProjectCard v-for="project in projects"
                    :supervisor="project.supervisor" 
                    :key="project.id"
                    :title="project.title"
                    :location="project.location"
                    :duration="project.duration"
                    :description="project.description"
                    :logo="project.logo"
                    :link="project.link"/>
    </div>
</template>
<script>
import records from '~/static/records.json';
import ProjectCard from '~/components/boring/ProjectCard';
export default {
    components: {
        ProjectCard,
    },
    data(){
        let projects = records.Projects.map((project) => {
            return {...project, isOpen: false}
        });
        return {
            projects,
        }
    }, 
}
</script>
<style scoped>
    .container {
        height: 80vh;
        overflow: auto;
    }
    .horizontal-line {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 140px;
        margin-left: 0;
        border-top-color: rgba(255,255,255, 0.5);
    }
</style>


