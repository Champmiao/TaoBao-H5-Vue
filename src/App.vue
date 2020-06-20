<template>
  <div id="app">
    <!-- 组件状态保存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "./components/common/Tabbar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    tabbar
  }
};
</script>

<style >
</style>
