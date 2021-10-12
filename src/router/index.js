import Vue from 'vue'
import Router from 'vue-router'
import Cars from '@/components/Cars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cars',
      component: Cars
    }
  ]
})
