import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import td rotas d app k ta si vez ta txoma ses views
import routes from './allroutes'

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
