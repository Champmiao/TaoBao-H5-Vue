<template>
  <!-- 商品详情页 ———— 底部tabbar组件 -->
  <div>
    <van-goods-action>
      <van-goods-action-icon class="iconfont icon-shop" text="店铺" color="#ff5000" />
      <van-goods-action-icon class="iconfont icon-wang" text="客服" color="#999" />
      <van-goods-action-icon class="iconfont icon-favor" text="收藏" color="#999" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>


<script>
export default {
  name: "goodsaction",
  data() {
    return {};
  }
};
</script>


<style>
.icon-shop:before,
.icon-wang:before,
.icon-favor:before {
  font-size: 18px;
}
.van-goods-action {
  z-index: 2;
  width: 10rem;
  height: 55px;
  left: 50%;
  transform: translateX(-50%);
}

.van-goods-action-icon__icon {
  margin: 0;
}
.iconfont {
  font-size: 10px;
  line-height: 20px;
  color: #999;
}
.van-goods-action-icon {
  min-width: 45px;
}
.van-goods-action-button--warning {
  background-image: linear-gradient(to right, #ffc500, #ff9402) !important;
}
.van-goods-action-button--danger {
  background-image: linear-gradient(to right, #ff7a00, #fe560a);
}
.van-goods-action-button--first {
  margin-left: -2px;
}
.van-goods-action-button--last {
  margin-left: -2px;
  margin-right: 10px;
}
.van-goods-action-button {
  height: 40px;
}
.van-button__text {
  font-weight: bold;
}
.icon-shop:before {
  color: #ff5000;
}
</style>

