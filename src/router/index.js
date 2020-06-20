import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home')
const Cart = () => import('../views/Cart')
const Orders = () => import('../views/Orders')
const Profile = () => import('../views/Profile')
const More = () => import('../views/More')
const Goodsinfo = () => import('../components/common/goodsinfo')
// 安装路由
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
Vue.use(Router);
// 创建路由关系
const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      keepalive: true // 组件状态是否需要被保存
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile
  }, {
    path: '/more',
    name: 'more',
    component: More
  }, {
    path: '/goodsinfo/:id',
    name: 'goodsinfo',
    component: Goodsinfo,

  }
]
const router = new Router({
  // mode: 'history',
  routes,
})

export default router
