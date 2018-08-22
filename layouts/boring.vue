<template>
    <div>
        <Navbar/>
        <div class="container-fluid">
            <nuxt/>
        </div>
        <BottomNav/>
    </div>
</template>
<script>
import Navbar from '~/components/Navbar';
import BottomNav from '~/components/BottomNav';
export default {
    components: {
        Navbar,
        BottomNav,
    }
}
</script>


