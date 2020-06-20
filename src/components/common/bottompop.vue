<template >
  <!-- 商品详情页 ———— 底部弹框组件(点击服务、规格、参数栏弹出) -->
  <div class="bottompop">
    <!-- vant弹框挂载本地组件 -->
    <van-cell is-link @click="showPopup">
      <span class="bottompopitem">{{title}}</span>
      <span class="bottompopdes">{{description}}</span>
      <span class="iconfont icon-back-copy"></span>
    </van-cell>
    <van-popup
      v-model="show"
      :get-container="getContainer"
      closeable
      round
      lock-scroll
      lazy-render
      position="bottom"
      :style="{ height: '83%' }"
    >
      <!-- 图片模拟弹出内容 -->
      <img class="popimg" src="@a/serve.png" alt />
    </van-popup>
  </div>
</template>


<script>
export default {
  name: "bottompop",
  props: ["title", "description"],
  data() {
    return { show: false };
  },
  methods: {
    // 返回一个特定的 DOM 节点，作为弹框挂载的父节点
    getContainer() {
      return document.querySelector(".bottompop");
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>


<style>
.bottompop {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 10rem;
  height: 1.12rem;
  background-color: rgb(255, 255, 255);
}
.bottompopitem {
  position: absolute;
  display: flex;
  margin-left: 0.32rem;
  width: fit-content;
  margin-top: 0.346667rem;
  height: 0.4rem;
  font-size: 0.346667rem;
  color: rgb(153, 153, 153);
  overflow: hidden;

  justify-content: flex-start;
  -webkit-box-pack: start;
  align-items: center;
  -webkit-box-align: center;
  max-width: none;
}
.bottompopdes {
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  -webkit-box-orient: vertical;
  margin-left: 1.44rem;
  margin-top: 0.346667rem;
  font-size: 0.346667rem;
  color: rgb(51, 51, 51);
  height: auto;
  line-height: 0.426667rem;
  width: 5.466667rem;
  -webkit-box-direction: normal;
}
.icon-back-copy:before {
  position: absolute;
  display: flex;
  margin-right: 0.24rem;
  width: 0.373333rem;
  margin-top: 0.346667rem;
  height: 0.373333rem;
  font-size: 0.373333rem;
  right: 0px;
  top: 0px;
  color: rgb(204, 204, 204);
  overflow: hidden;
  justify-content: flex-start;
  -webkit-box-pack: start;
  align-items: center;
  -webkit-box-align: center;
  max-width: none;
}
.van-popup--bottom.van-popup--round {
  border-radius: 0.266667rem 0.266667rem 0 0;
}
.van-popup--bottom {
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
}
.popimg {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
}
</style>

