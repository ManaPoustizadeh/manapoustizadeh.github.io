<template>
  <section class="foreground">
      <Cover :headlines="headlines"/>
      <Navigation-panel :menus="sections"/>
      <div class="content">
        <div id="education">
          <b-card class="mb-2" title="Educational Background">
              <div class="education card-text">
                  <Timeline :educationRecords="educationRecords" />
              </div>
          </b-card>
        </div>
        <div id="TA">
          <b-card title="Teaching Experience" class="mb-2">
              <div class="work card-text">
                  <Timeline :educationRecords="TARecords" />
              </div>
          </b-card>
        </div>
        <div id="work">
          <b-card title="Work" class="mb-2">
              <p class="card-text">
                  Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
              </p>
          </b-card>
        </div>
        
        <div id="contact">
          <b-card title="Contact" class="mb-2">
              <p class="card-text">
                  Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
              </p>
          </b-card>
        </div>
      </div>
  </section>
</template>

<script>
import Cover from '~/components/Cover';
import NavigationPanel from '~/components/NavigationPanel';
import Timeline from '~/components/Timeline';
export default {
  components: {
    Cover,
    NavigationPanel,
    Timeline,
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
    let educationRecords = [
      {
        title: 'BSc.',
        titleDescription: 'Bachelor of Science',
        timespan: '2014 - 2018',
        location: 'Amirkabir University of Technology (Tehran Polytechnic)',
        description: `Major: Computer Engineering
        Minor: Computer Architecture and Hardware Design
        GPA: 17/20 (A)`,
        end: '2018'
      },
      {
        title: 'HSDG',
        titleDescription: 'High School Diploma Graduate',
        timespan: '2010 - 2014',
        location: 'Aboureyhan High School',
        description: `Major: Mathematics and Physics
        GPA: 17/20 (A)`,
        end: '2014'
      },
    ]
    let TARecords=[
      {
        title: 'TA',
        titleDescription: 'Teaching Assistant',
        timespan: 'Jan 2018 - Jul 2018',
        location: 'Amirkabir University of Technology (Tehran Polytechnic)',
        description: `Internet Engineering
        Dr. Bahador Bakhshi - Assistant Professor`,
        end: '2018'
      },
      {
        title: 'TA',
        titleDescription: 'Teaching Assistant',
        timespan: 'Jan 2017- Jun 2017',
        location: 'Amirkabir University of Technology (Tehran Polytechnic)',
        description: `Computer Aided Digital System Design
        Prof. Morteza Saheb Zamani - Professor`,
        end: '2017'
      },
      {
        title: 'TA',
        titleDescription: 'Teaching Assistant',
        timespan: 'Jan 2017- Jun 2017',
        location: 'Amirkabir University of Technology (Tehran Polytechnic)',
        description: `Computer Architecture
        Dr. Saeed Shiry – Associate professor`,
        end: '2017'
      },
      {
        title: 'TA',
        titleDescription: 'Teaching Assistant',
        timespan: 'Sep 2015 – Jan 2016',
        location: 'Amirkabir University of Technology (Tehran Polytechnic)',
        description: `Fundamentals of Programming
        Dr. Bahman Poorvatan - Lecturer`,
        end: '2016'
      },
      {
        title: 'LECT',
        titleDescription: 'Lecturer',
        timespan: 'Jan 2015 – Jul 2015',
        location: 'Aboureyhan High School',
        description: `Geometry and Differential Equations`,
        end: '2015'
      },
    ]
    return {
      headlines,
      sections,
      educationRecords,
      TARecords
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

