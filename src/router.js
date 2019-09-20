import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Address from './views/Address/Address.vue'
// import Cart from './views/Cart/Cart.vue'
import Login from './views/Customer/Login.vue'
import CheckOut from './views/Order/CheckOut.vue'
import List from './views/Product/List.vue'
import View from './views/Product/View.vue'
import Serve from './views/Serve/Serve.vue'
import Register from './views/Customer/Register'
import Cart_shop from './views/shopCart/Cart_shop'
import AddressCreate from './views/Address/AddressCreate'






Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/category',  //分类
      name:'category',
      component:Category,
    },
    {
      path:'/product/list/:id',
      name:'list',
      component:List,
    },
    {
      path:'/product/view/:id',
      name:'view',
      component:View,
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/address',
      name:'address',
      component:Address,
    },
    // {
    //   path:'/cart',
    //     name:'cart',
    //   component:Cart,
    // },
      {
          path:'/serve',
          name:'serve',
          component:Serve,
      },
    {
      path:'/cart_shop',
      name:'cart_shop',
      component:Cart_shop,
    },
    {
      path:'/checkout',
      name:'checkout',
      component:CheckOut,
    },
    {
      path:'/address/addressCreate',
      name:'addressCreate',
      component:AddressCreate,
    },




  ]
})
