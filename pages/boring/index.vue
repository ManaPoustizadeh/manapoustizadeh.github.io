<template>
    <div>
        Hello
        <BottomNav :menus="menus" @goToCategory="goToCategory"/>
    </div>
</template>
<script>
import BottomNav from '~/components/BottomNav';
export default {
    layout: 'boring',
    components: {
        BottomNav,
    },
    data() {
        const menus = [
            {name: 'Overview', active: true}, 
            {name: 'My Story', active: false},
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
            this.menus = newMenus;
        }
    }
}
</script>
<style scoped>
    
</style>


