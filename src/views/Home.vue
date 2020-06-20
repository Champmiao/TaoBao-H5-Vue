<template>
  <!-- 首页组件 -->
  <div id="home">
    <!-- 搜索 -->
    <search></search>
    <!-- 轮播图 -->
    <div class="swipewrap">
      <swipe></swipe>
      <!-- 白色弧形遮罩 -->
      <div class="cover"></div>
    </div>
    <!-- 多功能入口 -->
    <gird></gird>
    <!-- 推荐会场 -->
    <recommend class="recommend"></recommend>
    <!-- 淘宝头条 -->
    <firstnew></firstnew>
    <!-- 你可能还喜欢 -->
    <div class="youprefer">
      <img class="youpreferimg" src="@a/icon/youprefer.png" alt />
    </div>
    <!-- 商品推荐列表 -->
    <div class="goodslistwrap">
      <goodslist ref="goodslist"></goodslist>
    </div>
    <!-- 返回顶部 -->
    <backtop class></backtop>
    <!-- 底部Tabbar -->
    <tabbar></tabbar>
    <scroll ref="scroll"></scroll>
    <goodsinfo v-if="false"></goodsinfo>
  </div>
</template> 

<script>
import backtop from "../components/common/backtop";
import firstnew from "../components/common/firstnew";
import search from "../components/common/search";
import swipe from "../components/common/Swipe";
import tabbar from "../components/common/Tabbar";
import gird from "../components/common/Grid";
import recommend from "../components/common/recommend";
import goodslist from "../components/common/goodslist";
import scroll from "../components/common/Scroll";
import goodsinfo from "../components/common/goodsinfo";

// 引入下面的文件是为了在桌面端正常使用Vant移动端的功能，这个库会在桌面端自动将mouse事件转换成对应的touch事件。
import "@vant/touch-emulator";
export default {
  name: "App",
  data() {
    return {
      currentpage: 1, // 当前商品列表页码
      pageaddress: "http://learn.tx2.qrqy.net/api/product/getListByCon?page=", // 接口拼接地址
      saveY: 0, // 记录Y轴坐标
      lockload: true //加载锁
    };
  },
  components: {
    tabbar,
    search,
    swipe,
    gird,
    backtop,
    recommend,
    firstnew,
    goodslist,
    scroll,
    goodsinfo
  },
  methods: {
    // 滑动到底部加载更多商品
    handleScroll() {
      if (this.lockload) {
        var that = this;
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        if (scrollTop + windowHeight == scrollHeight) {
          // 伪随机推荐商品(随机页码)
          // var min = 1;
          // var max = 35;
          // this.currentpage = Math.floor(Math.random() * (max - min + 1)) + min;
          if (that.currentpage >= 35) {
            alert("抱歉，没有其他商品");
          } else {
            // 每次滑动到底部，当前页码+1
            that.currentpage++;
            // 拼接新页码的接口地址传给子组件goodslist.vue
            that.$refs.goodslist.getgoods(that.pageaddress + that.currentpage);
          }
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    console.log("首页销毁");
    window.removeEventListener("scroll", this.handleScroll);
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
    this.lockload = true;
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    this.lockload = false;
  }
};
</script>

<style scoped>
.swipewrap {
  position: relative;
  margin-top: 37px;
}
.cover {
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: -0.026667rem;
  background-image: url("../assets/coverline.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.recommend {
  margin: 10px auto;
  margin-bottom: 0;
}
.youprefer {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 1.253333rem;
  text-align: center;
  padding: 0.32rem 0;
}
.youpreferimg {
  width: 4.293333rem;
  height: 0.506667rem;
  vertical-align: top;
}
.goodslistwrap {
  width: 10rem;

  position: relative;
  box-sizing: border-box;
  padding: 0 0.2rem;
  background: #f2f2f2;
  padding-bottom: 0.32rem;
}
.backtop {
  z-index: 20;
  position: fixed;
  bottom: 70px;
  cursor: pointer;
  transition: opacity 0.2s linear 0s, visibility;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
}
</style>
