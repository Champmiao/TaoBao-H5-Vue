<template >
  <!-- 首页 ———— 淘宝头条纵向轮播组件 -->
  <div class="firstnew">
    <div class="firstnwewrap">
      <img
        class="firsticon"
        src="https://gw.alicdn.com/tfs/TB1E8zAQAPoK1RjSZKbXXX1IXXa-192-60.png?isInFirstScreen=1&getAvatar=1_145x145q90_.webp"
        alt
      />
      <div class="swipernews">
        <van-swipe
          style="height: 300px;"
          vertical
          :touchable="false"
          :height="50"
          :autoplay="2000"
          :show-indicators="false"
        >
          <van-swipe-item>
            <span class="news1">萌宠</span>
            <span class="news2">为什么唤猫的名字，它总不搭理？</span>
          </van-swipe-item>
          <van-swipe-item>
            <span class="news1">评测</span>
            <span class="news2">网红瓶盖饮料，三秒钟把水变成饮料</span>
          </van-swipe-item>
          <van-swipe-item>
            <span class="news1">摄影</span>
            <span class="news2">专治镜头尴尬症，7个女生通用pose</span>
          </van-swipe-item>
          <van-swipe-item>
            <span class="news1">评测</span>
            <span class="news2">实测：五款最强防霾滤芯安利给你</span>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstnew",
  data() {
    return {};
  }
};
</script>


<style scoped>
.firstnwewrap {
  display: inline-block;
  width: 8.833333rem;
  height: 0.533333rem;
  margin: 0.266667rem auto;
  overflow: hidden;
}
.firstnew {
  margin: 0 auto;
  width: 9.52rem;
  height: 1.066667rem;
  background-color: #fff;
  border-radius: 0 0 0.266667rem 0.266667rem;
  text-align: center;
}
.firsticon {
  width: 1.706667rem;
  height: 0.533333rem;
  float: left;
}

.van-swipe-item {
  font-size: 0.346667rem;
  margin-left: 0.133333rem;
}

.van-swipe {
  position: relative;
  left: -0.373333rem;
}
.news1 {
  margin-left: 0.16rem;
  width: 100%;
  box-sizing: border-box;
  height: 0.533333rem;
  line-height: 0.533333rem;
  white-space: nowrap;
  background-color: #feefec;
  color: #e86217;
  border-radius: 0.106667rem;
  padding: 0.08rem 0.16rem;
}
.news2 {
  white-space: nowrap;
  color: #313131;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

