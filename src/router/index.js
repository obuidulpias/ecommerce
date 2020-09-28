import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Category from '@/components/category/Category.vue'
import ProductDetail from '@/components/product/Product.vue'
import ShoppingCart from '@/components/cart/ShoppingCart.vue'
import Checkout from '@/components/checkout/Checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category-product',
      name: 'Category',
      component: Category
    },
    {
      path: '/product-detail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ],
  mode: 'history'
})
