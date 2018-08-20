<template>
  <div @scroll="handleScroll" class="foreground">
      <Cover :headlines="headlines"/>
      <Navigation-panel :fixed="fixed" :menus="sections"/>
      <div :class="{content: true, fixedTop: fixed}">
        <EducationSection :educationRecords="educationRecords" />
        <TeachingSection :TARecords="TARecords" />
        <ContactSection :contacts="contacts" />
      </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover';
import NavigationPanel from '~/components/NavigationPanel';
import TeachingSection from '~/components/TeachingSection';
import EducationSection from '~/components/EducationSection';
import ContactSection from '~/components/ContactSection';
import records from '~/static/records.json';
export default {
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400|Montserrat:100,200,300,400|Open+Sans:300,400' }
      ]
    } 
  },
  components: {
    Cover,
    NavigationPanel,
    TeachingSection,
    EducationSection,
    ContactSection,
  }, 
  data: () => {
    let headlines = [
        'Hardware Student, Web Developer, UX Designer'
    ];
    let sections = [
      {name: 'Education', icon: "graduation-cap", route: '#education'},
      {name: 'Work', icon: "briefcase", route: '#work'},
      {name: 'Research', icon: "book-open", route: 'research' },
      {name: 'Teaching', icon: "chalkboard-teacher", route: '#TA'},
      {name: 'Contact', icon: "envelope", route: '#contact'}
    ]
    return {
      headlines,
      sections,
      educationRecords: records.Education,
      TARecords: records.Teaching,
      contacts: records.Contact,
      fixed: false,
    }
  },
  methods: {
    handleScroll(e){
      console.log('====================================');
      console.log(e.target.scrollTop);
      if(e.target.scrollTop > 394 && !this.fixed)
        this.fixed = true;
      if(e.target.scrollTop <= 394 && this.fixed)
        this.fixed = false;
      console.log(this.fixed);
      console.log('====================================');
    }
  },
}
</script>
<style scoped>
  .foreground {
    width: 80%;
    height: 100%;
    position: relative;
    background: black;
    padding-top: 10rem;
    font-family: 'Lato';
    overflow-y: auto;
  }
  .content {
    padding: 0.5rem;
    margin-top: 7rem;
    transition: 0.5s ease;
  }
  .fixedTop {
    margin-top: 13.5rem;
    transition: 0.5s ease;
  }
  .card-text {
    min-height: 400px;
  }
</style>

