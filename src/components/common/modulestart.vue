<template>
  <!-- 商品详情页 ———— 分割线提示组件 -->
  <div>
    <div class="divide-bar">
      <span class="line"></span>
      <div class="icon-info">
        <span class="iconfont icon-piclight"></span>
        <span class="icon-text">{{whichmodule}}</span>
      </div>
      <span class="line"></span>
    </div>
  </div>
</template>


<script>
export default {
  name: "modulestart",
  props: ["whichmodule"],
  data() {
    return {};
  }
};
</script>


<style>
</style>

