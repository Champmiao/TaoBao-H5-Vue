<template>
  <!-- 首页 ———— 推荐会场入口单项组件 -->
  <div>
    <!-- 包裹盒子：用来float：left，避免与position：relative冲突 -->
    <div class="recommenditemwrap">
      <!-- 包裹盒子：布局大小、relative -->
      <div class="recitemwrap">
        <img class="title1" :src="this.titleimg" />
        <div class="title2">{{this.text}}</div>
        <img class="img1" :src="this.imgsrcone" />
        <img class="img2" :src="this.imgsrctwo" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "recommenditem",
  props: ["text", "titleimg", "imgsrcone", "imgsrctwo"],
  data() {
    return {};
  }
};
</script>


<style  >
.recommenditemwrap {
  float: left;
  border-right: 1px solid #eee;
}
.recitemwrap {
  position: relative;
  width: 4.75rem;
  height: 3.226667rem;
  background-color: #fff;
}
.title1 {
  position: absolute;
  width: 4.7rem;
  height: 0.533333rem;
  top: 0.256667rem;
}
.title2 {
  position: absolute;
  height: 0.533333rem;
  top: 0.85rem;
  font-size: 0.346667rem;
  line-height: 0.426667rem;
  padding-left: 0.32rem;
  color: rgb(255, 80, 125);
}
.img1 {
  position: absolute;
  height: 1.653333rem;
  bottom: 0.133333rem;
  left: 25%;
  transform: translateX(-50%);
}
.img2 {
  position: absolute;
  height: 1.653333rem;
  bottom: 0.133333rem;

  right: 25%;
  transform: translateX(50%);
}
</style>

