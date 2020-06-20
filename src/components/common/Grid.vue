<template >
  <!-- 首页 ———— 首页多功能会场入口组件 -->
  <div @click="noting">
    <van-grid :border="false" :column-num="5">
      <van-grid-item
        v-for="(val,inx) in goods_icon"
        :key="inx"
        :icon="val.imgurl"
        :text="val.goods_content"
      ></van-grid-item>
    </van-grid>
    <div class="sliderbox">
      <span class="slider">
        <div></div>
        <div></div>
      </span>
    </div>
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  name: "grid",
  data() {
    return {
      goods_icon: [
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1",
          goods_content: "天猫新品"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1",
          goods_content: "今日爆款"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          goods_content: "天猫国际"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1",
          goods_content: "饿了么"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1",
          goods_content: "天猫超市"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
          goods_content: "充值中心"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1",
          goods_content: "机票酒店"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1",
          goods_content: "金币庄园"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
          goods_content: "阿里拍卖"
        },
        {
          imgurl:
            "https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1",
          goods_content: "淘宝吃货"
        }
      ]
    };
  },
  methods: {
    noting() {
      Toast.loading({
        message: ":) 待开发",
        forbidClick: true,
        duration: 500
      });
    }
  }
};
</script>


<style >
.van-icon__image {
  width: 1.626667rem;
  height: 1.28rem;
}
.van-grid-item__content {
  padding: 0;
}
.van-grid {
  height: 4.16rem;
}
.van-grid-item__text {
  font-size: 0.32rem;
}
.sliderbox {
  position: relative;
  widows: 100%;
  height: 20px;
  background: #fff;
}
.slider {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 3px;
  background-color: rgb(212, 216, 222);
  border-radius: 4px;
}
.slider :first-child {
  flex: 3;
  background-color: rgb(255, 109, 42);
}
.slider :last-child {
  flex: 4;
}
</style>

