import { createRouter } from '@ionic/vue-router';
import { createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CartEditTemplatePage from '../views/cart-edit-template.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cart-edit-template',
    name: 'cart-edit-template',
    component: CartEditTemplatePage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
