<template>
  <!-- 商品详情页 ———— 宝贝评价 + 问大家 组件 -->
  <div>
    <!-- 宝贝评价 -->
    <div class="pinlunwrap">
      <div class="pinglunhead">
        <span class="pingjiatitle">宝贝评价(777)</span>
        <span class="seeall">查看全部</span>
        <span class="iconfont icon-next-m"></span>
      </div>
      <div class="pinglunbody">
        <div class="customer">
          <img
            src="https://wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vCNuv8lzvF9hPHgYP0guO8gbP0k0MkRIvCk4vFIWv0lIMmg4MC9zM87IMFHYvHgG&width=40&height=40&type=sns"
            class="customerimg"
          />
        </div>
        <span class="customername">t**3</span>
        <span class="comments">套子非常贴合，材质细腻，充电口什么的也在外面，非常人性化，满意的购物体验</span>
      </div>
    </div>
    <div class="grayline"></div>

    <!-- 问大家 -->
    <div class="wendajiawrap">
      <div class="wendajiahead">
        <span class="wendajiatitle">问大家(77)</span>
        <span class="seeall">查看全部</span>
        <span class="iconfont icon-next-m"></span>
      </div>
      <div class="wendajiabody">
        <img
          src="http://gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_30x30q90_.webp"
          class="wendajiaimg"
        />
        <span class="question">是真品吗？</span>
      </div>
      <div class="wendajiablock"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "reviews",
  data() {
    return {};
  }
};
</script>


<style>
.pinglunhead,
.wendajiahead {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 10rem;
  height: 1.173333rem;
  background-color: rgb(255, 255, 255);
}
.pingjiatitle,
.wendajiatitle {
  position: absolute;
  display: flex;
  margin-left: 0.32rem;
  width: fit-content;
  height: 100%;
  font-size: 0.373333rem;
  left: 0px;
  top: 0px;
  color: rgb(51, 51, 51);
  justify-content: flex-start;
  -webkit-box-pack: start;
  align-items: center;
  -webkit-box-align: center;
  overflow: hidden;
  max-width: none;
  line-height: 0.453333rem;
}
.seeall {
  position: absolute;
  display: flex;
  margin-right: 0.746667rem;
  width: fit-content;
  height: 0.64rem;
  font-size: 0.346667rem;
  right: 0px;
  top: 0.266667rem;
  color: rgb(255, 80, 0);
  justify-content: flex-start;
  -webkit-box-pack: start;
  align-items: center;
  -webkit-box-align: center;
  overflow: hidden;
  max-width: none;
  line-height: 0.453333rem;
}
.pinglunbody,
.wendajiabody {
  position: relative;
  overflow: hidden;
  width: 10rem;
  height: 2.426667rem;
  background-color: rgb(255, 255, 255);
}
.customer {
  position: relative;
  display: flex;
  margin-left: 0.32rem;
  width: 0.533333rem;
  height: 0.533333rem;
  left: 0px;
  top: 0.266667rem;
  border-radius: 0.266667rem;
}
.customerimg {
  width: 0.533333rem;
  height: 0.533333rem;
  max-height: 100%;
  max-width: 100%;
  opacity: 1;
  vertical-align: middle;
}
.customername {
  position: absolute;
  margin-left: 1.066667rem;
  width: fit-content;
  margin-top: 0.293333rem;
  top: 0;
  font-size: 0.346667rem;
  overflow: hidden;
  color: rgb(153, 153, 153);
  line-height: 0.426667rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.comments {
  position: absolute;
  top: 0;
  margin-left: 0.32rem;
  width: 9.466667rem;
  margin-top: 0.933333rem;
  margin-bottom: 0.533333rem;
  height: auto;
  font-size: 0.346667rem;
  overflow: hidden;
  color: rgb(51, 51, 51);
  -webkit-line-clamp: 2;
  line-height: 0.48rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.grayline {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: 0.346667rem;
  width: 9.52rem;
  height: 0.026667rem;
  background-color: rgb(244, 244, 244);
}
.icon-next-m:before {
  position: absolute;
  margin-right: 0.24rem;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(255, 80, 0);
  font-size: 0.373333rem;
}
.wendajiabody {
  height: 0.853333rem;
}
.wendajiaimg {
  position: absolute;
  overflow: hidden;
  margin-left: 0.32rem;
  width: 0.32rem;
  height: 0.32rem;
  left: 0;
  top: 0.053333rem;
}
.question {
  position: absolute;
  margin-left: 0.746667rem;
  width: 7.2rem;
  font-size: 0.346667rem;
  left: 0;
  top: 0;
  color: rgb(22, 43, 54);
  line-height: 0.426667rem;
}
.wendajiablock {
  width: 10rem;
  ruby-align: #ffffff;
  height: 0.426667rem;
}
</style>

