<template>
    <div class="container pr-md-5 pl-md-1 pr-sm-0 pl-sm-0 mb-sm-5 pb-sm-3">
        <transition name="fade">
            <component :is="currentTab"></component>
        </transition>
        <BottomNav :menus="menus" @goToCategory="goToCategory"/>
    </div>
</template>
<script>
import BottomNav from '~/components/BottomNav';
import Overview from '~/components/boring/Overview';
import Story from '~/components/boring/Story';
import Education from '~/components/boring/Education';
export default {
    layout: 'boring',
    components: {
        BottomNav,
        Overview,
        Story,
        Education,
    },
    data() {
        const menus = [
            {name: 'Overview', active: true}, 
            {name: 'Story', active: false},
            {name: 'Education', active: false},
            {name: 'Experience', active: false},
            {name: 'Projects and Research', active: false},
            {name: 'Skills', active: false},
            {name: 'Awards', active: false},
            {name: 'News', active: false},
            {name: 'Contact', active: false},
        ];
        return {
            menus,
            selectedIndex: 0,
        }
    },
    methods: {
        goToCategory(selectedIndex){
            let newMenus = this.menus.map((menu, index) => {
                if(menu.active)
                    menu.active = false;
                return menu;
            });
            newMenus[selectedIndex].active = true;
            this.selectedIndex = selectedIndex; 
            this.menus = newMenus;
        }
    },
    computed: {
        currentTab: function () {
            return this.menus[this.selectedIndex].name;
        }
    }
}
</script>
<style scoped>
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter-active {
        transition: opacity .5s ease;
        transition-delay: .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>


