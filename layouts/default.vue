<template>
  <div class="body">
    <nuxt/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar';
export default {
  components: {
    Navbar,
  },
}
</script>
<style>
  .body {
    background: #2e2e2e;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    scroll-behavior: smooth;
  }
</style>



<style>
</style>

