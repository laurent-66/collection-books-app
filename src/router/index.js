import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Signin from '@/views/public/Signin.vue'
import NotFound from '@/views/public/NotFound.vue'
import LayoutPublic from '@/views/public/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'LayouPublic',
      component: LayoutPublic,
      children: [
        {path:'/', name:'Home', component: Home},
        {path:'/Signin', name:'Signin', component: Signin},
      ]
    },
    {
      path:'/:pathMatch(.*)*', component: NotFound
    },
    // {
    //   path:'/:pathMatch(.*)*', redirect: '/'
    // },
  ]
})

export default router
