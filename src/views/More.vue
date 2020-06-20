<template>
  <!-- 微信二维码组件 -->
  <div>
    <img class="mywechat" src="@a/WeChat.jpg" />
  </div>
</template>


<script>
export default {
  name: "more",
  data() {
    return {};
  }
};
</script>


<style>
.mywechat {
  position: absolute;
  width: 10rem;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 155px 0;
  background-color: #fff;
}
</style>

