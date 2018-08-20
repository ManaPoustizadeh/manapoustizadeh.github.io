<template>
  <section class="foreground">
      <Cover :headlines="headlines"/>
      <Navigation-panel :menus="sections"/>
      <div class="content">
        <EducationSection :educationRecords="educationRecords" />
        <TeachingSection :TARecords="TARecords" />
        
        <ContactSection :contacts="contacts" />
      </div>
  </section>
</template>

<script>
import Cover from '~/components/Cover';
import NavigationPanel from '~/components/NavigationPanel';
import TeachingSection from '~/components/TeachingSection';
import EducationSection from '~/components/EducationSection';
import ContactSection from '~/components/ContactSection';
import records from '~/static/records.json';
export default {
  components: {
    Cover,
    NavigationPanel,
    TeachingSection,
    EducationSection,
    ContactSection,
  }, 
  computed: {
    fas() {
      return fas
    }
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
    }
  }
}
</script>
<style scoped>
  .foreground {
    width: 80%;
    height: 100%;
    position: relative;
    background: black;
    padding-top: 10rem;
  }
  .content {
    padding: 0.5rem;
  }
  .card-text {
    min-height: 400px;
  }
</style>

