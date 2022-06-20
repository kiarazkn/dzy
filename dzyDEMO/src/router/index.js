import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'
import Detail from '../views/detail/Detail.vue'
import Dynamic from '../views/profile/Dynamic.vue'
import Book from '../views/profile/Book.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    redirect: '/home'
  },
  {
    path: '/home', 
    component: Home,
  },
  {
    path: '/category', 
    component: Category,
  },
  {
    path: '/cart', 
    component: Cart,
  },
  {
    path: '/profile', 
    component: Profile,

    children:[
      {
        path: '/dynamic',
        name: "Dynamic", 
        component: Dynamic,
      },
      {
        path: '/book', 
        name: "Book", 
        component: Book,
      }
    ]
  },
  {
    path: '/detail',
    component: Detail
  },
 
]

const router = new VueRouter({
  routes
})

export default router
