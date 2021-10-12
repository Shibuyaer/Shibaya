import Vue from 'vue'
import VueRouter from 'vue-router'
import user from "./modules/user"
import login from "./modules/login"
import store from '../store'
Vue.use(VueRouter)

const routes = [
  ...user,
  ...login
]

const router = new VueRouter({
  routes
})

export default router

router.beforeEach((to, from, next) => {
  
  if(to.matched.length==0){
    next("/404")
  }else{
    if(to.matched.some((v)=>v.meta.islogin===true)){
      if(store.state.token.token){
        next()
      }else{
        next("/login")
      }
    }else{
      next()
    }
  } 
})