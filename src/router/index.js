import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import World from '@/components/World'
import RoleInfo from '@/components/RoleInfo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/', name: 'login', component: Login
  }, {
    path: '/world', name: 'world', component: World
  }, {
    path: '/role', name: 'role', component: RoleInfo
  }]
})
