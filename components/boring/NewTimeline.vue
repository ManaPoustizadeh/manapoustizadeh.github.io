<template>
<ul class="timeline">
    <li v-for="item in items" :key="item.id" class="timeline-event">
      <label class="timeline-event-icon"></label>
      <div class="timeline-event-copy">
        <p class="timeline-event-thumbnail">{{item.timespan}}</p>
        <h3>{{item.titleDescription}}</h3>
        <h4 v-html="item.location"></h4>
        <p v-if="item.course">
          <strong>
            {{item.course}}  
            <span v-if="item.profLink"> | </span>
            <a v-if="item.profLink" :href="item.profLink" class="prof-link"  target="_blank">{{item.prof}}</a>
            <span v-else-if="item.prof">{{item.prof}}</span>
          </strong><br>
          {{item.description}}
        </p>
        <p v-else><strong>{{item.firstJob}}</strong><br>{{item.firstJobDesc}}</p>
        <p v-if="item.secondJob"><strong>{{item.secondJob}}</strong><br>{{item.secondJobDesc}}</p>
        <strong v-if="item.links">Useful Links:<br/></strong>
        <div class="link" v-for="(link, index) in item.links" :key="link.id">
          <a :href="link.linkURL" target="_blank">{{link.linkText}}</a>
          <div class="link-description">
            <span v-if="link.linkDesc">{{link.linkDesc}}</span>
          </div>
          <hr v-if="index+1 !== item.links.length" class="horizontal-line">
        </div>
      </div>
    </li>
</ul>  
</template>
<script>
export default {
    props: {
        items: Array,
    }
}
</script>

<style lang="scss" scoped>

/* Variables */
$color-1: black;
$color-2: white;
$color-3: rgb(168, 50, 121);

/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);
body {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
}

/* Layout */
* {
  box-sizing: border-box;
}

/* Styling */
.timeline {
  margin: 4em auto;
  position: relative;
  left: -60px;
  list-style: none;
  
  &:before {
    background-color: $color-1;
    content: '';
    margin-left: 39px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
}

.timeline-event {
  position: relative;
  
  &:hover {
  
    .timeline-event-icon {
      transform: rotate(-45deg);
      background-color: $color-3;
    }
    
    .timeline-event-thumbnail {
      box-shadow: inset 40em 0 0 0 $color-3;
    }
  }
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  // width: 80%;
  
  h3 {
    font-size: 1.75em;
  }
  
  h4 {
    font-size: 1.2em;
    margin-bottom: 1.2em;
  }
  
  strong {
    font-weight: 700;
  }
  
  p:not(.timeline-event-thumbnail) {
    padding-bottom: 1.2em;
  }
}

.timeline-event-icon {
    transition: transform 0.2s ease-in;
  transform: rotate(45deg);
  
  background-color: $color-1;
  outline: 10px solid rgb(48, 128, 251);
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  transition: box-shadow 0.5s ease-in 0.1s;
  color: $color-2;
  font-size: 0.75em;
  
  background-color: $color-1;
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: underline;
}
.link {
  font-size: 0.7rem;
  font-weight: 100;
}
.link-description {
  font-size: 0.6rem;
  font-weight: 400;
  margin-top: 2px;
}
.horizontal-line {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 40px;
    margin-left: 0;
}
.prof-link {
  text-decoration: underline;
}
</style>

