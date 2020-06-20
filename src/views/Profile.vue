<template>
  <!-- 我的淘宝组件 -->
  <div>
    <!-- 橙色头部 -->
    <div class="orangewrap">
      <div class="profileblock1"></div>
      <div class="profilehead">
        <div class="headimg"></div>
        <span class="yourname">一只小肥柴</span>
        <div class="iconwrap">
          <div class="profilemessage"></div>
          <div class="system"></div>
        </div>
      </div>
      <div class="profilebody">
        <div class="son1">
          <div class="son1son1">7</div>
          <div class="son1son2">收藏夹</div>
        </div>
        <div class="son2">
          <div class="son2son1">7</div>
          <div class="son2son2">关注店铺</div>
        </div>
        <div class="son3">
          <div class="son3son1">7</div>
          <div class="son3son2">足迹</div>
        </div>
        <div class="son4">
          <div class="son4son1">7</div>
          <div class="son4son2">红包卡券</div>
        </div>
      </div>
      <div class="profileblock2"></div>
    </div>

    <!-- 我的订单 -->
    <div class="myorderwrap">
      <div class="radius">
        <div class="myorderhead">
          <span class="myordertitle">我的订单</span>
          <span class="seeorders">查看全部订单</span>
          <span class="iconfont icon-back-copy"></span>
        </div>
        <div class="profileline"></div>
        <div class="myorderbody">
          <div class="daifukuan">
            <img
              class="daifukuan1"
              src="https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp"
            />
            <div>待付款</div>
          </div>
          <div class="daifahuo">
            <img
              class="daifahuo1"
              src="https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp"
            />
            <div>待发货</div>
          </div>
          <div class="daishouhuo">
            <img
              class="daishouhuo1"
              src="https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp"
            />
            <div>待收货</div>
          </div>
          <div class="pingjia">
            <img
              class="pingjia1"
              src="https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp"
            />
            <div>评价</div>
          </div>
          <div class="tuikuan">
            <img
              class="tuikuan1"
              src="https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp"
            />
            <div>退款/售后</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 必备工具 -->
    <div class="utilswrap">
      <div class="radius">
        <div class="utilshead">
          <span class="utilstitle">必备工具</span>
          <span class="seeutils">查看全部工具</span>
          <span class="iconfont icon-back-copy"></span>
        </div>
        <div class="profileline"></div>
        <div class="utilsbody">
          <div class="meirifanxian">
            <img
              class="meirifanxian1"
              src="https://gw.alicdn.com/tfs/TB1Jcbkj4D1gK0jSZFsXXbldVXa-96-96.png_70x70q90_.webp"
            />
            <div>每日返现</div>
          </div>
          <div class="lingquanzhongxin">
            <img
              class="lingquanzhongxin1"
              src="https://gw.alicdn.com/tfs/TB1zT0hkkT2gK0jSZPcXXcKkpXa-96-96.png_70x70q90_.webp"
            />
            <div>领券中心</div>
          </div>
          <div class="xianzhihuanqian">
            <img
              class="xianzhihuanqian1"
              src="https://gw.alicdn.com/tfs/TB14QMupYj1gK0jSZFuXXcrHpXa-96-96.png_70x70q90_.webp"
            />
            <div>闲置换钱</div>
          </div>
          <div class="kefuxiaomi">
            <img
              class="kefuxiaomi1"
              src="https://gw.alicdn.com/tfs/TB1csUri13tHKVjSZSgXXX4QFXa-96-96.png_70x70q90_.webp"
            />
            <div>客服小蜜</div>
          </div>
          <div class="huabei">
            <img
              class="huabei1"
              src="https://gw.alicdn.com/tps/TB1rhCFPXXXXXa1XVXXXXXXXXXX-96-96.png_70x70q90_.webp"
            />
            <div>花呗</div>
          </div>
          <div class="wodekuaidi">
            <img
              class="wodekuaidi1"
              src="https://gw.alicdn.com/tfs/TB1S6oYmQL0gK0jSZFxXXXWHVXa-96-96.png_70x70q90_.webp"
            />
            <div>我的快递</div>
          </div>
          <div class="wodepingjia">
            <img
              class="wodepingjia1"
              src="https://gw.alicdn.com/tps/TB1RN1QPXXXXXaqXFXXXXXXXXXX-96-96.png_70x70q90_.webp"
            />
            <div>我的评价</div>
          </div>
          <div class="zhutihuanfu">
            <img
              class="zhutihuanfu1"
              src="https://gw.alicdn.com/tfs/TB1q0T8mpOWBuNjy0FiXXXFxVXa-96-96.png_70x70q90_.webp"
            />
            <div>主题换肤</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "profile",
  data() {
    return {
      lockload1: false
    };
  },
  methods: {}
};
</script>


<style>
.orangewrap {
  width: 10rem;
  height: 4.533333rem;
  background-image: linear-gradient(to right, #fd9126, #ff5000);
}
.profileblock1 {
  width: 10rem;
  height: 0.266667rem;
}
.profilehead {
  position: relative;
  width: 10rem;
  height: 2.16rem;
}
.profilebody {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 10rem;
  height: 1.786667rem;
  padding: 0 0.133333rem;
}
.profileblock2 {
  width: 10rem;
  height: 0.32rem;
}
.headimg {
  display: flex;
  overflow: hidden;
  position: absolute;
  width: 1.306667rem;
  height: 1.306667rem;
  margin-left: 0.48rem;
  margin-top: 0.746667rem;
  border-color: #ffffff;
  border-style: solid;
  border-width: 0.026667rem;
  border-radius: 0.666667rem;
  background-color: rgba(255, 255, 255, 0);
  left: 0;
  top: 0;
  background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3707037492,1462046314&fm=26&gp=0.jpg");
  background-size: contain;
  background-position: center center;
}
.yourname {
  display: flex;
  overflow: hidden;
  position: absolute;
  font-size: 0.533333rem;
  color: #ffffff;
  width: 5.333333rem;
  height: auto;
  margin-top: 0.666667rem;
  margin-left: 2.106667rem;
  font-weight: bold;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  align-items: center;
  max-width: auto;
  -webkit-box-pack: start;
  -webkit-box-align: center;
}
.iconwrap {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 10rem;
  height: 0.533333rem;
  top: 0.666667rem;
  /* left: 8rem; */
}
.profilemessage,
.system {
  /* float: right; */
  position: absolute;
  width: 0.533333rem;
  height: 0.533333rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
.profilemessage {
  background-image: url(https://gw.alicdn.com/tfs/TB1tcovekL0gK0jSZFxXXXWHVXa-54-54.png_48x48q90_.webp);
  right: 1.466667rem;
}
.system {
  background-image: url(https://gw.alicdn.com/tfs/TB1dbweXwHqK1RjSZFgXXa7JXXa-57-54.png_48x48q90_.webp);
  margin-left: 0.586667rem;
  right: 0.4rem;
}
.son1,
.son2,
.son3,
.son4 {
  flex: 1;
}
.son1son1,
.son2son1,
.son3son1,
.son4son1 {
  margin-top: 0.28rem;
  color: #ffffff;
  width: 2.426667rem;
  height: auto;
  font-size: 0.373333rem;
  line-height: 0.448rem;
  text-align: center;
}
.son1son2,
.son2son2,
.son3son2,
.son4son2 {
  margin-top: 0.266667rem;
  color: #ffffff;
  width: 2.426667rem;
  height: auto;
  font-size: 0.32rem;
  text-align: center;
}
.myorderwrap,
.utilswrap {
  width: 10rem;
  height: 3.653333rem;
  padding: 0.266667rem 0;
}
.utilswrap {
  height: 5.48rem;

  width: 10rem;
}
.radius {
  position: absolute;
  margin-left: 0.32rem;
  width: 9.36rem;
  overflow: hidden;
  margin-right: 0.32rem;
  border-radius: 0.32rem;
  background-color: #ffffff;
}
.myorderhead,
.utilshead {
  position: relative;
  width: 9.36rem;
  height: 1.013333rem;
}
.profileline {
  display: flex;
  overflow: hidden;
  width: 9.36rem;
  height: 1px;
  background-color: #eeeee7;
  align-self: center;
  justify-self: flex-end;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.myordertitle,
.utilstitle {
  position: absolute;
  height: 0.533333rem;
  font-size: 0.373333rem;
  margin-left: 0.306667rem;
  color: rgb(51, 51, 51);
  font-weight: bold;
  left: 0;
  top: 0.24rem;
  line-height: 0.448rem;
  justify-content: center;
  align-items: center;
}
.seeorders,
.seeutils {
  position: absolute;
  right: 0;
  top: 0.32rem;
  font-size: 0.32rem;
  line-height: 0.384rem;
  color: rgb(153, 153, 153);
  margin-right: 0.666667rem;
  justify-content: flex-start;
  -webkit-box-pack: start;
  justify-content: center;
  align-items: center;
}
.myorderbody,
.utilsbody {
  display: flex;
  width: 9.36rem;
}
.myorderbody {
  height: 2.026667rem;
}
.utilsbody {
  display: flex;
  flex-wrap: wrap;
  height: 4.466667rem;
}
.daifukuan,
.daifahuo,
.daishouhuo,
.pingjia,
.tuikuan,
.meirifanxian,
.lingquanzhongxin,
.xianzhihuanqian,
.kefuxiaomi,
.huabei,
.wodekuaidi,
.wodepingjia,
.zhutihuanfu {
  font-size: 0.32rem;
  line-height: 0.384rem;
  text-align: center;
}

.daifukuan1,
.daifahuo1,
.daishouhuo1,
.pingjia1,
.tuikuan1,
.meirifanxian1,
.lingquanzhongxin1,
.xianzhihuanqian1,
.kefuxiaomi1,
.huabei1,
.wodekuaidi1,
.wodepingjia1,
.zhutihuanfu1 {
  width: 0.773333rem;
  height: 0.773333rem;
  margin-top: 0.453333rem;
  margin-bottom: 0.133333rem;
}
.daifukuan,
.daifahuo,
.daishouhuo,
.pingjia,
.tuikuan {
  width: 20%;
  height: 2.026667rem;
}
.meirifanxian,
.lingquanzhongxin,
.xianzhihuanqian,
.kefuxiaomi,
.huabei,
.wodekuaidi,
.wodepingjia,
.zhutihuanfu {
  width: 25%;
}
.icon-back-copy {
  width: 0.373333rem;
  height: 0.373333rem;
}
.icon-back-copy:before {
  position: absolute;
  font-size: 0.373333rem;
  color: rgb(153, 153, 153);
  right: 0;
  /* top: 0.32rem; */
  margin-right: 0.32rem;
  line-height: 0.373333rem;
}
</style>
