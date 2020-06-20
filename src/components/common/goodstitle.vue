<template >
  <!-- 商品详情页 ———— 商品标题概述组件 -->
  <div>
    <div class="goodstitlewrap">
      <div class="pricewrap">
        <span class="RMBicon">￥</span>
        <span class="saleprice">{{message.sale_price}}</span>
        <span class="taojinbi">淘金币可抵消{{(parseFloat(message.sale_price)*0.04).toFixed(2)+"元"}}</span>
      </div>
      <div class="delprice">
        价格:￥
        <del>{{message.show_price}}</del>
      </div>
      <div class="deswrap">
        <span class="goodsintro">{{message.intro}}</span>
        <div class="share">
          <div class="iconfont icon-share"></div>
          <span class="sharetext">分享</span>
        </div>
      </div>
      <div class="nums">
        <span class="post">快递: 免运费</span>
        <span class="salenum">月销{{message.show_num}}</span>
        <span class="from">{{from}}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "goodstitle",
  props: ["message"], // message接受父组件存储的全部商品信息
  data() {
    return {
      from: "辽宁沈阳" // 暂无商品产地，模拟用
    };
  }
};
</script>


<style>
.goodstitlewrap {
  line-height: 1;
  padding: 0 0.32rem;
}
.pricewrap {
  display: flex;
  padding-top: 0.3rem;
  color: #ff5000;
  align-items: flex-end;
}
.RMBicon {
  float: left;
  font-size: 0.4rem;
  margin-bottom: 0.053333rem;
  margin-left: -0.093333rem;
}
.saleprice {
  float: left;
  font-size: 0.64rem;
  margin-right: 0.133333rem;
}
.taojinbi {
  /* float: left; */
  display: flex;
  box-sizing: border-box;
  font-size: 0.24rem;
  align-items: center;
  height: 0.373333rem;
  background-color: #fff1eb;
  border-radius: 0.533333rem;
  padding: 0.1rem;
  text-align: center;
  margin-right: 0.106667rem;
  margin-bottom: 0.053333rem;
}
.delprice {
  padding-top: 0.053333rem;
  font-size: 0.266667rem;
  color: #999;
}
.nums {
  display: flex;
  position: relative;

  overflow: hidden;
  width: 100%;
  height: 1.066667rem;
  background-color: rgb(255, 255, 255);
}
.post,
.salenum,
.from {
  position: absolute;
  display: flex;
  width: fit-content;
  height: auto;
  max-width: 3.2rem;
  font-size: 0.346667rem;
  overflow: hidden;
  top: 0.32rem;
  color: rgb(153, 153, 153);
  justify-content: flex-start;
  -webkit-box-pack: start;
  align-items: center;
  -webkit-box-align: center;
}
.post {
  left: 0px;
}
.salenum {
  left: 50%;
  transform: translateX(-50%);
}
.from {
  right: 0px;
}
.deswrap {
  position: relative;
  height: 1.173333rem;
}
.goodsintro {
  position: absolute;
  margin-top: 0.106667rem;
  width: 8rem;
  font-size: 0.4rem;
  color: rgb(51, 51, 51);
  font-weight: bold;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 0.533333rem;
  text-overflow: ellipsis;
}
.share {
  position: absolute;
  overflow: hidden;
  margin-right: -0.32rem;
  width: 1.493333rem;
  margin-top: 0px;
  height: 0.64rem;
  right: 0;
  top: 0.266667rem;
  /* text-align: center; */
  background-color: rgb(244, 244, 244);
  flex-direction: row;
  -webkit-box-orient: horizontal;
  border-top-left-radius: 0.32rem;
  border-bottom-left-radius: 0.32rem;
  -webkit-box-direction: normal;
}
.sharetext {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 0.64rem;
  height: 0.373333rem;
  margin-right: 0.16rem;
  line-height: 0.373333rem;
  font-size: 0.32rem;
  color: rgb(153, 153, 153);
  white-space: nowrap;
}
.icon-share {
  width: 0.453333rem;
  height: 0.453333rem;
}
.icon-share:before {
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  font-size: 0.426667rem;
  margin-left: 0.24rem;
}
</style>

