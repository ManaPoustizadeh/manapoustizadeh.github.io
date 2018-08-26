<template>
    <b-card :title="title"
          :img-src="'~/assets/img/'+logo"
          :img-alt="title"
          img-top
          tag="article"
          class="mx-1 skill-card">
    <p class="card-text">
      {{description}}
    </p>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</template>

<script>
export default {
    props: {
        title: String,
        logo: String, 
        description: String,
    }
}
</script>
<style scoped>
    .skill-card {
        min-width: 200px;
    }
</style>


