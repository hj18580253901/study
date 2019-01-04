import Vue from 'vue'
import Router from 'vue-router'
import Index from '@src/views/index/Index'
import Vicinity from '@src/views/vicinity/Vicinity'
import ShareFood from '@src/views/vicinity/ShareFood'
import Find from '@src/views/find/Find'
import Order from '@src/views/order/Order'
import Owner from '@src/views/owner/Owner'
import Food from '@src/views/index/food/Food'
import OrderDetail from '@src/views/order/OrderDetail'
import CompletePage from '@src/views/order/CompletePage'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  base: '/app/',
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/food',
      component: Food
    },
    {
      path: '/vicinity',
      component: Vicinity,
      children: [
        {path: '', redirect: '/vicinity/shareFood'},
        {path: '/vicinity/:name', component: ShareFood}
      ]
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/order/complete/:product',
      name: 'completePage',
      component: CompletePage
    },
    {
      path: '/order/detail',
      name: 'orderDetail',
      component: OrderDetail
    },
    {
      path: '/owner',
      name: 'owner',
      component: Owner
    }
  ]
})
