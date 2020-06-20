// 样式初始化
import './styles/flexible.js'
import './styles/normalize.css'
import './styles/index.css'
import "./styles/iconfont.css"

// 引入公共库
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from "axios";
Vue.prototype.$http = axios;

import "@vant/touch-emulator";
// 引入Vant UI框架
import {
  Tabbar,
  TabbarItem,
  Col,
  Row,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Popup,
  Search,
  Lazyload,
  Card,
  AddressList,
  SubmitBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Col).use(Row).use(Popup).use(Search).use(Lazyload, {
  lazyComponent: true,
}).use(Card).use(AddressList).use(SubmitBar).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
