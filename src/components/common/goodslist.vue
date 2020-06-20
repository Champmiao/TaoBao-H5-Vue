<template >
  <!-- 首页、详情页 ———— 商品滚动列表组件 -->
  <div class="goodslist">
    <lazy-component>
      <a
        @click="idgetgood(val.id)"
        class="goodsbox"
        href="#"
        v-for="(val,inx) in goodslistmessage"
        :key="inx"
        v-lazy="val"
      >
        <!-- 接口主图失效，暂用其它图片代替 -->
        <img class="goodsimg" :src="val.img_arr[0]" alt />
        <div class="goodspricebox">
          <div class="top">
            <span class="goodsname">{{val.name}}</span>
          </div>
          <div class="price">
            <span class="RMB">￥</span>
            <span
              class="goodsprice"
            >{{(parseFloat(val.sale_price)+ Math.floor(Math.random() * 10 + 1)).toFixed(2)}}</span>
            <span class="goodsbuy">{{val.show_num+"人已购买"}}</span>
          </div>
        </div>
      </a>
    </lazy-component>
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  name: "goodslist",
  data() {
    return {
      token: "6B8F4F0095407A1B9850806F87395882AFAB3E9707435D6B0888B566D7AD3FF8",
      goodslistmessage: [] // 商品数据存放
    };
  },
  methods: {
    // 获取点击商品的id，通过id进行路由跳转至对应详情页
    idgetgood(id) {
      this.$router.push({ name: "goodsinfo", params: { id: id } });
    },
    // 访问接口，获取商品列表
    getgoods(url) {
      // 商品加载轻提示;
      Toast.loading({
        message: ":) 加载中",
        forbidClick: true,
        duration: 300
      });
      this.$http
        .get(url)
        .then(res => {
          // 直接使用array.concet方法Vue没有动态渲染，暂用push方法循环添加新商品
          for (var i = 0; i < res.data.ret.data.length; i++) {
            this.goodslistmessage.push(res.data.ret.data[i]);
          }
        })
        .catch(e => {
          console.log(e + "获取商品列表失败");
        });
    }
  },
  created() {
    // 页面初始化时直接调用接口渲染商品列表一次
    this.$http
      .get("http://learn.tx2.qrqy.net/api/product/getListByCon")
      .then(res => {
        this.goodslistmessage = res.data.ret.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>


<style  >
.goodsbox {
  display: block;
  float: left;
  position: relative;
  width: 4.56rem;
  height: 6.933333rem;
  margin: 0 0.12rem;
  box-sizing: border-box;
  background: #fff;
  margin-top: 0.24rem;
  border-radius: 0.16rem;
  overflow: hidden;
  text-decoration: none;
}
.goodsimg {
  width: 4.56rem;
  height: 4.56rem;
  vertical-align: top;
}
.goodsname {
  width: 4.053333rem;
  height: 0.986667rem;
  overflow: hidden;
  text-overflow: clip;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.346667rem;
  line-height: 0.493333rem;
  color: #333333;
}
.goodspricebox {
  box-sizing: border-box;
  width: 4.56rem;
  height: 2.373333rem;
  padding: 0.306667rem 0.24rem 0 0.266667rem;
}

.price {
  margin-top: 0.293333rem;
}
.goodsprice {
  font-size: 0.4rem;
  line-height: 0.426667rem;
  color: #ff5500;
}
.RMB {
  font-size: 0.32rem;
  color: #ff5500;
}
.goodsbuy {
  font-size: 0.293333rem;
  color: #999999;
}
</style>

