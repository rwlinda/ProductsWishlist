import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishlistView from '../views/WishlistView.vue'

const routes = [
  {path: '/',name: "Home", component: HomeView},  
  {path: '/wishlist',name: "Wishlist", component: WishlistView}  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
