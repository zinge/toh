import Vue from 'vue'
import Router from 'vue-router'
import DisplayHeroes from '../components/DisplayHeroes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'DisplayHeroes',
      component: DisplayHeroes
    }
  ]
})
