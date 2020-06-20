<template >
  <!-- 首页 ———— 返回顶部组件 -->
  <div class="positionlock">
    <div class="backtop" v-show="visiable" @click="handleScrollTop">
      <img class="backicon" src="@a/icon/backtop.png" />
      顶部
    </div>
  </div>
</template>


<script>
export default {
  name: "backtop",
  data() {
    return {
      scrollTop: null, //初始化scrollTop
      visiable: false //默认不显示
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 660) {
        this.visiable = true;
      } else {
        this.visiable = false;
      }
    },
    handleScrollTop() {
      let timer = null,
        that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (that.scrollTop > 0) {
          that.scrollTop -= 500;
          document.body.scrollTop = document.documentElement.scrollTop =
            that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
          that.visiable = false;
        }
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>


<style >
.backtop {
  position: fixed;
  right: 10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  font-size: 12px;
  line-height: 65px;
  text-align: center;
  color: rgb(187, 187, 187);
  transition: visibility 0.2s linear;
}
.backicon {
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
}
.backtext {
  position: absolute;
  width: 10px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5px;
}
.positionlock {
  position: fixed;
  z-index: 10;
  width: 10rem;
  height: 46px;
  bottom: 70px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  box-sizing: border-box;
}
</style>

