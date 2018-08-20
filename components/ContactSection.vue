<template>
    <div id="contact">
        <b-card title="Contact" class="mb-2">
            <p class="card-text">
                <ContactItem v-for="contact in contacts" 
                            :key="contact.title+contact.value"
                            :contact="contact" />
            </p>
        </b-card>
    </div>
</template>
<script>
import ContactItem from '~/components/ContactItem';
export default {
    components: {
        ContactItem,
    },
    props: {
        contacts: Array,
    }
}
</script>

<style scoped>
    .card-text {
        min-height: 400px;
    }
</style>

