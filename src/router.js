import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import game from './views/game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () {
        // @ts-ignore
        return import('./views/About.vue')
      }
    },
    {
      path: '/:gameId',
      name: 'game',
      component: game
    }
  ]
})