<template >
  <!-- 首页 ———— 推荐会场入口组件 -->
  <div class="recommendwrap" @click="noting">
    <div class="makemore">
      <recommenditem
        v-for="(val,inx) in recommendlist"
        :key="inx"
        :text="val.text"
        :titleimg="val.titleimg"
        :imgsrcone="val.imgsrcone"
        :imgsrctwo="val.imgsrctwo"
      />
    </div>
  </div>
</template>


<script>
import { Toast } from "vant";
import recommenditem from "./recommenditem";
export default {
  name: "recommend",
  components: {
    recommenditem
  },
  data() {
    return {
      recommendlist: [
        {
          text: "限时五折",
          titleimg:
            "https://gw.alicdn.com/tfs/TB11.K2mq61gK0jSZFlXXXDKFXa-525-60.png?getAvatar=1_360x360q90_.webp",
          imgsrcone:
            "https://gw.alicdn.com/imgextra/O1CN01YqQDcI1CofIcvNhit_!!128-2-lubanu.png_125x125q90_.webp",
          imgsrctwo:
            "https://gw.alicdn.com/imgextra/i1/35/O1CN01KGYsB11C84OS3HeOn_!!35-2-lubanu.png_125x125q90_.webp"
        },
        {
          text: "全民口碑推荐",
          titleimg:
            "https://gw.alicdn.com/tfs/TB1Cbq1mrj1gK0jSZFuXXcrHpXa-525-60.png?getAvatar=1_360x360q90_.webp",
          imgsrcone:
            "https://img.alicdn.com/tps/O1CN016d83ev1CyHcM23Y3D_!!149-2-lubanu.png_125x125q90_.webp",
          imgsrctwo:
            "https://img.alicdn.com/tps/O1CN01ulDKl32Jnw9o29ssh_!!0-juitemmedia.jpg_125x125q90_.webp"
        },
        {
          text: "限时半价",
          titleimg:
            "https://gw.alicdn.com/tfs/TB1jkazoAL0gK0jSZFAXXcA9pXa-525-60.png?getAvatar=1_360x360q90_.webp",
          imgsrcone:
            "https://gw.alicdn.com/imgextra/i2/16/O1CN01ROtRJw1BzMvTJgiun_!!16-2-lubanu.png_125x125q90_.webp",
          imgsrctwo:
            "https://gw.alicdn.com/imgextra/i3/25/O1CN01MlOzK21C3URDBX96t_!!25-0-lubanu.jpg_180x180q90_.webp"
        },
        {
          text: "拼团2折起",
          titleimg:
            "https://gw.alicdn.com/tfs/TB1MfTtQrrpK1RjSZTEXXcWAVXa-525-60.png?getAvatar=1_360x360q90_.webp",
          imgsrcone:
            "https://gw.alicdn.com/imgextra/i2/9/O1CN01wfChcd1BwA7jkKH7C_!!9-2-lubanu.png_125x125q90_.webp",
          imgsrctwo:
            "https://img.alicdn.com/tps/O1CN01CvEjqr1ByS9OyVYaN_!!14-2-lubanu.png_125x125q90_.webp"
        },
        {
          text: "挖深藏的店",
          titleimg:
            "https://gw.alicdn.com/tfs/TB1lfyQmpY7gK0jSZKzXXaikpXa-525-60.png?getAvatar=1_360x360q90_.webp",
          imgsrcone:
            "https://gw.alicdn.com/imgextra/i4/63/O1CN01tgOKBm1CKtVKbMvkT_!!63-0-lubanu.jpg_180x180q90_.webp",
          imgsrctwo:
            "https://gw.alicdn.com/imgextra/i4/95/O1CN019zOmzx1CZYAVswo6Q_!!95-2-lubanu.png_125x125q90_.webp"
        },
        {
          text: "粉丝都爱看",
          titleimg:
            "https://gw.alicdn.com/tfs/TB1jkazoAL0gK0jSZFAXXcA9pXa-525-60.png?getAvatar=1_360x360q90_.webp",
          imgsrcone:
            "https://gw.alicdn.com/imgextra/i4/55/O1CN015JWAUF1CHEMF9QKWv_!!55-2-lubanu.png_125x125q90_.webp",
          imgsrctwo:
            "https://gw.alicdn.com/imgextra/i2/119/O1CN01oeTsn81CkXc2eo5gN_!!119-0-lubanu.jpg_180x180q90_.webp"
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
.recommendwrap {
  width: 9.493333rem;
  height: 9.68rem;
  background-color: #fff;
  border-radius: 0.266667rem 0.266667rem 0 0;
  border-bottom: 1px solid #eee;
  overflow: hidden;
}
.makemore {
  width: 10.666667rem;
}
</style>

