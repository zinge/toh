<template>
  <div class="display-heroes">
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero in heroes" :key="hero.id" @click="onSelect(hero)" :class="{ selected: hero === selectedHero }">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <hero-detail :hero="selectedHero"/>
  </div>
</template>

<script>
import HeroDetail from './HeroDetail.vue'
import axios from 'axios'

export default {
  name: 'DisplayHeroes',

  data: () => ({
    API_UPL: 'http://localhost:3030/api/heroes',

    heroes: [],
    selectedHero: false
  }),

  mounted() {
    this.getHeroes()
  },

  methods: {
    onSelect(hero) {
      this.selectedHero = hero
    },

    getHeroes() {
      axios.get(API_UPL)
        .then(response => {
          this.heroes = response.data.data
        })
        .catch(err => console.log(err))
    }
  },

  components: {
    HeroDetail
  }
}
</script>

<style>
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
</style>
