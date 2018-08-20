<template>
    <div id="contact">
        <b-card title="Contact" class="mb-2">
            <div class="card-text">
                <ContactItem v-for="contact in contacts" 
                            :key="contact.title+contact.value"
                            :contact="contact" />
            </div>
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
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }
</style>

