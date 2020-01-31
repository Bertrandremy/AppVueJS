import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'

Vue.use(Router)
useEslint: false;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
