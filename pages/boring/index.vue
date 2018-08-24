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
import Experience from '~/components/boring/Experience';
import Projects from '~/components/boring/Projects';
export default {
    layout: 'boring',
    components: {
        BottomNav,
        Overview,
        Story,
        Education,
        Experience,
        Projects,
    },
    data() {
        const menus = [
            {id: 'Overview',  name: 'Overview', active: true}, 
            {id: 'Story',  name: 'Story', active: false},
            {id: 'Education',  name: 'Education', active: false},
            {id: 'Experience',  name: 'Experience', active: false},
            {id: 'Projects',  name: 'Projects and Research', active: false},
            {id: 'Skills',  name: 'Skills', active: false},
            {id: 'Awards',  name: 'Awards', active: false},
            {id: 'News',  name: 'News', active: false},
            {id: 'Contact',  name: 'Contact', active: false},
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
            return this.menus[this.selectedIndex].id;
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


