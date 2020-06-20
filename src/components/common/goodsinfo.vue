<template>
  <!-- 商品详情页组件(接口数据不充分，仅做页面功能展示) -->
  <div class="goodsbg">
    <!-- 主图轮播 -->
    <div class="imgswrap">
      <van-swipe :loop="false" @change="onChange">
        <van-swipe-item v-for="(val,inx) in imglist" :key="inx">
          <img class="goodsinfoimg" :src="val" @click="imgpreview()" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{imgnum}}</div>
        </template>
      </van-swipe>
    </div>

    <!-- 返回首页 + 购物车 按钮 -->
    <div class="topbar">
      <div class="back iconfont icon-back" @click="backbutton"></div>
      <div class="tocart iconfont icon-cart" @click="tocart"></div>
    </div>

    <!-- 商品标题概述 -->
    <div>
      <goodstitle class="goodsinfocenter" :message="goodsmessage"></goodstitle>
      <!-- 以下的goodsinfoblock均为10px高度占位块 -->
      <div class="goodsinfoblock"></div>
      <bottompop
        :title="this.parameters.serve[0]"
        :description="this.parameters.serve[1]"
        :img="this.parameters.serve[2]"
      ></bottompop>
      <div class="goodsinfoblock"></div>
      <bottompop :title="this.parameters.guige[0]" :description="this.parameters.guige[1]"></bottompop>
      <bottompop :title="this.parameters.canshu[0]" :description="this.parameters.canshu[1]"></bottompop>
      <div class="goodsinfoblock"></div>
    </div>

    <!-- 商品评论 + 问大家 模块 -->
    <reviews></reviews>

    <!-- 商品详情模块 -->
    <div>
      <!-- 商品详情起始标记 -->
      <modulestart :whichmodule="this.module.goodsinfo"></modulestart>
      <div class="force">由于接口数据不足，仅做展示</div>
      <!-- 详情图片遍历 -->
      <img class="goodsinfoimg" v-for="(val,inx) in imglist" :key="inx" :src="val" />
    </div>

    <!-- 页尾商品推荐模块 -->
    <div>
      <!-- 商品推荐起始标记 -->
      <modulestart :whichmodule="this.module.goodsrecommend"></modulestart>
      <!-- 详情页尾端上拉推荐 -->
      <goodslist class="goodslistwrap2 clearfix"></goodslist>
    </div>

    <!-- 底部tabbar组件 -->
    <goodsaction></goodsaction>
  </div>
</template>


<script>
import modulestart from "./modulestart";
import goodslist from "./goodslist";
import reviews from "./reviews";
import bottompop from "./bottompop";
import goodstitle from "./goodstitle";
import { ImagePreview } from "vant";
import goodsaction from "./goodsaction";
export default {
  name: "goodsinfo",
  data() {
    return {
      current: 0, //当前播放图片index
      id: 0, //商品对应id
      goodsmessage: {}, //商品全部信息
      imglist: [], //主图地址列表
      imgnum: 0, //主图数量
      parameters: {
        serve: ["服务", "7天无理由", "@a/fakeimg/serve.png"],
        guige: ["规格", "请选择颜色分类"],
        canshu: ["参数", "品牌 型号 生产日期 .."]
      },
      module: {
        goodsinfo: "详情",
        goodsrecommend: "推荐商品"
      },
      // 接口拼接地址
      pageaddress: "http://learn.tx2.qrqy.net/api/product/getListByCon?page="
    };
  },
  methods: {
    // 将父组件路由传参的id值存储到子组件的data中
    getid() {
      this.id = this.$route.params && this.$route.params.id;
    },
    // 每一张主图滑动结束触发，返回当前图片索引
    onChange(index) {
      this.current = index;
    },
    // 调用Vant图片放大器函数，将图片地址列表传入
    imgpreview() {
      ImagePreview(this.imglist);
    },
    // 详情页返回按钮
    backbutton() {
      // 调用一次路由返回不成功，两次成功
      this.$router.back(-1);
      this.$router.back(-1);
    },
    // 详情页 → 购物车
    tocart() {
      this.$router.push({ name: "cart" });
    }
  },

  components: {
    goodsaction,
    goodstitle,
    bottompop,
    reviews,
    modulestart,
    goodslist
  },
  mounted() {
    // 存储获取的id值
    this.getid();
    // 页面初始化时直接调用接口渲染列表一次
    this.$http
      .get("http://learn.tx2.qrqy.net/api/product/getById?id=" + this.id)
      .then(res => {
        // 存储对应id全部商品信息
        this.goodsmessage = res.data.ret;
        // 将图片地址列表存储到imglist数组中
        this.imglist = res.data.ret.img_arr;
        this.imgnum = this.imglist.length;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>


<style>
.custom-indicator {
  position: absolute;
  display: inline-block;
  right: 0.266667rem;
  bottom: 0.666667rem;
  font-size: 0.266667rem;
  height: 0.533333rem;
  line-height: 0.573333rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 0.266667rem;
  border-radius: 0.533333rem;
  z-index: 10;
}
.goodsbg {
  position: relative;
  background-color: #fff;
}
.van-swipe__track {
  transform: translateX(-175px);
}
.imgswrap {
  /* height: 375px; */
  width: 100%;
  text-align: center;
}
.van-swipe {
  width: 100%;
  /* height: 3.2rem; */
  text-align: center;
}
.topbar {
  position: fixed;
  z-index: 10;
  width: 10rem;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 10px;
  box-sizing: border-box;
}
.back,
.tocart {
  position: relative;

  float: left;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  color: #fff;
  padding-top: 6px;
}
.tocart {
  float: right;
}
.icon-back:before,
.icon-cart:before {
  font-size: 22px;
  color: #fff;
  top: 6px;
}
.goodsinfocenter {
  width: 100%;
  margin: 0 auto;
}
.goodsinfoblock {
  width: 10rem;
  height: 0.266667rem;
  background: #f4f4f4;
}
.blockinfo {
  height: 500px;
}
.divide-bar {
  background-color: #f2f2f2;
  color: #999;
  padding: 0.213333rem 0;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
}
.line {
  display: inline-block;
  width: 1.066667rem;
  border-top: 0.026667rem solid #999;
}
.icon-info {
  position: relative;
  top: -0.026667rem;
  margin: 0 0.213333rem;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.icon-piclight:before {
  font-size: 0.48rem;
}
.icon-text {
  font-size: 0.32rem;
  margin-left: 0.026667rem;
}
.goodsinfoimg {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
}
.goodslistwrap2 {
  width: 10rem;
  position: relative;
  box-sizing: border-box;
  padding: 0 0.2rem;
  background: #ffffff;
  padding-bottom: 0.32rem;
  margin-bottom: 55px;
}
.force {
  text-align: center;
  font-size: 0.74rem;
}
</style>

