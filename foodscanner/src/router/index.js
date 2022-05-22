import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    props: true,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    props: true,
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
