<template>
    <div :class="{panel: true, fixed: isFixed }">
        <a v-for="menu in menus" :href="menu.route" :key="menu.name">
            <div class="menu-item">
                <fa :icon="menu.icon" size="2x"></fa>
                <span class="name">{{menu.name}}</span>
            </div>
        </a>
    </div>
</template>
<style scoped>
    .tabs {
        width: 100%;
    }
    a, a:hover {
        text-decoration: none; 
        color: inherit;
    }
    .nav, .tab {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .panel {
        color: #efefef;
        display: flex;
        flex-wrap: wrap;
        z-index: 6;
        position: absolute;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        background: #202020;
        width: 100%;
    }
    .fixed {
        position: fixed;
        top: 0; 
        right: 0;
        left: 0;
    }
    .name {
        /* margin-top: 0.5rem; */
    }
    .menu-item {
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        transition: 0.4s ease;
        color: #efefef;
    }
    .menu-item:hover {
        transition: 0.4s ease;
        color: #FFB300;
        text-decoration: none;
    }
</style>
<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
export default {
    props: {
        menus: Array,
        fixed: Boolean,
    },
    computed: {
        fas() {
            return fas
        },
        isFixed() {
            if (this.fixed !== null) {
                return this.fixed
            }
        }
    }
}
</script>


