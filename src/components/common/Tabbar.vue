<template>
  <!-- 全局 ———— 底部导航栏组件 -->
  <div>
    <van-tabbar v-model="active" class="tabbar">
      <van-tabbar-item @click="topage(val.content)" badge v-for="(val,inx) in icon" :key="inx">
        <span>{{val.content}}</span>
        <template #icon="inx">
          <img :src="inx.active ? val.active : val.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      icon: [
        {
          active: require("@a/icon/home_fill_light.png"),
          inactive: require("@a/icon/home_light.png"),
          content: "首页"
        },
        {
          active: require("@a/icon/cart_fill_light.png"),
          inactive: require("@a/icon/cart_light.png"),
          content: "购物车"
        },
        {
          active: require("@a/icon/order_list.png"),
          inactive: require("@a/icon/order_list-o.png"),
          content: "地址列表"
        },
        {
          active: require("@a/icon/my_fill_light.png"),
          inactive: require("@a/icon/my_light.png"),
          content: "我的淘宝"
        },
        {
          active: require("@a/icon/more.png"),
          inactive: require("@a/icon/more_light.png"),
          content: "更多"
        }
      ]
    };
  },
  methods: {
    topage(content) {
      switch (content) {
        case "首页":
          this.$router.push("/home");
          break;
        case "购物车":
          this.$router.push("/cart");
          break;
        case "地址列表":
          this.$router.push("/orders");
          break;
        case "我的淘宝":
          this.$router.push("/profile");
          break;
        case "更多":
          this.$router.push("/more");
          break;
        default:
          console.log("无跳转路由地址匹配");
      }
    }
  }
};
</script>


<style >
.tabbar {
  width: 10rem;
  height: 43px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.van-tabbar-item--active {
  color: #000;
}
.van-tabbar-item {
  font-size: 10px;
}
</style>

