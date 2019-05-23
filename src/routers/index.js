//主路由
import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie'
import CinameRouter from './ciname'
import MineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    MovieRouter,
    CinameRouter,
    MineRouter,
    { //重定向
    	path:'/*',
    	redirect:'/movie'
    }
  ]
})
