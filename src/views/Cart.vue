<template>
  <!-- 购物车组件 -->
  <div>
    <div class="cartback">
      <div class="carttitle">购物车(4)</div>
      <div class="ctrl">管理</div>
    </div>
    <div class="cartitemwrap">
      <van-card
        num="1"
        price="4199.00"
        desc="IPS Type-C 90W反向充电 HDR400 旋转升降 四边微边框"
        title="戴尔（DELL）27英寸4K超清显示器"
        thumb="https://img14.360buyimg.com/n0/jfs/t1/88623/35/11773/423413/5e3b8ad5Ea78ded8d/3cc182e4b1e79fc3.jpg"
        origin-price="4999.00"
      >
        <van-tag plain type="danger">DELL</van-tag>
        <van-tag plain type="danger">显示器</van-tag>

        <van-button size="mini">-</van-button>
        <van-button size="mini">+</van-button>
      </van-card>
      <van-card
        num="1"
        price="6998.00"
        desc="2020年新款(256G WLAN版/全面屏/A12Z/Face ID/MXDC2CH/A) 深空灰色"
        title="Apple iPad Pro 11英寸平板电脑"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        origin-price="7699.00"
      >
        <van-tag plain type="danger">Apple</van-tag>
        <van-tag plain type="danger">平板电脑</van-tag>

        <van-button size="mini">-</van-button>
        <van-button size="mini">+</van-button>
      </van-card>
      <van-card
        num="1"
        price="18099.00"
        desc="九代六核i7 16G 512G 深空灰 Radeon Pro 5300M显卡 "
        title="Apple 2019新品 MacBook Pro 16"
        thumb="https://img14.360buyimg.com/n0/jfs/t1/50902/13/16242/169086/5dd3d4f2E19e1994f/ff8ecd5a61c1bebb.jpg"
        origin-price="21999.00"
      >
        <van-tag plain type="danger">Apple</van-tag>
        <van-tag plain type="danger">笔记本</van-tag>

        <van-button size="mini">-</van-button>
        <van-button size="mini">+</van-button>
      </van-card>

      <van-card
        num="1"
        price="1799.00"
        desc="主动降噪无线蓝牙耳机 适用iPhone/iPad/Apple Watch"
        title="Apple AirPods Pro"
        thumb="https://img14.360buyimg.com/n0/jfs/t1/116441/39/6566/28786/5ebb97afE215748ed/4a85a2f9090c6b9f.jpg"
        origin-price="2299.00"
      >
        <van-tag plain type="danger">Apple</van-tag>
        <van-tag plain type="danger">蓝牙耳机</van-tag>

        <van-button size="mini">-</van-button>
        <van-button size="mini">+</van-button>
      </van-card>
    </div>
    <!-- 底部占位块 -->
    <div class="block"></div>
    <!-- 提交栏 -->
    <van-submit-bar :price="3109500" button-text="提交订单" @submit="submit"></van-submit-bar>
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  name: "cart",
  data() {
    return {};
  },
  methods: {
    submit() {
      // 待开发轻提示
      Toast.loading({
        message: ":) 待开发",
        forbidClick: true,
        duration: 500
      });
    }
  }
};
</script>


<style scoped>
.carttitle {
  float: left;
  font-size: 0.533333rem;
  line-height: 0.586667rem;
  font-weight: bold;
  padding-left: 0.32rem;
  color: #fff;
}
.ctrl {
  margin-right: 0.4rem;
  float: right;
  font-size: 0.4rem;
  line-height: 0.586667rem;
  padding-left: 0.32rem;
  color: #fff;
}
.cartback {
  box-sizing: border-box;
  padding-top: 0.533333rem;
  width: 100%;
  height: 4rem;
  background-image: linear-gradient(-90deg, #ff5000 0%, #ff8400 100%);
}
.cartitemwrap {
  margin-top: -2.133333rem;
}
.van-card__thumb {
  width: 2.346667rem;
  height: 2.346667rem;
  margin-right: 0.213333rem;
}
.van-card {
  font-size: 0.32rem;
  margin: 0.4rem 0.3rem;
  padding: 0.213333rem 0.426667rem;
  border-radius: 0.3rem;
}
.van-card__title {
  font-weight: 600;
  line-height: 0.426667rem;
}
.van-card__desc {
  max-height: 0.533333rem;
  line-height: 0.533333rem;
}
.van-card__price {
  color: red;
  font-size: 0.32rem;
}
.van-card__bottom {
  line-height: 0.533333rem;
}
.van-card__footer {
  font-size: 0.48rem;
  font-weight: 400;
}
.van-card__price-integer {
  font-size: 0.426667rem;
}
.van-card__origin-price {
  margin-left: 0.133333rem;
  font-size: 0.266667rem;
}
.van-submit-bar {
  bottom: 43px;
  width: 10rem;
  left: 50%;
  transform: translateX(-50%);
}
.van-submit-bar__bar {
  height: 43px;
}
.block {
  height: 2rem;
}
</style>

