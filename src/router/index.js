import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jbs/Jobs.vue'
import JobDetails from '../views/jbs/JobDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path:'/jobs',
    name:'jobs',
    component:Jobs
  },
  {
    path:'/Jobs/:id',
    name: 'JobDetails',
    component:JobDetails,
    props:true
  },

  // redirect == if we want to redirect a old path to a new path
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  // catchall == this route path is used for the route that dosent exist it will show 404 componenet
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component : NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
