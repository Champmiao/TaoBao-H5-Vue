<template>
  <!-- 首页 ———— 轮播图组件 -->
  <div>
    <van-swipe class="my-swipe" autoplay="3000" loop:true>
      <van-swipe-item v-for="(val,inx) in imgList" :key="inx">
        <img class="img" :src="val" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "swipe",
  data() {
    return {
      // 图片手动获取保存过程过于耗时，现利用在线url仅做演示。
      imgList: [
        "https://picasso.alicdn.com/imgextra/i1/345414/O1CNA1c5m9D4100d75fa5cc30b832c11000t_!!345414-0-picassobanner.jpg",
        "https://picasso.alicdn.com/imgextra/i3/344107/O1CNA1g1PmhY100d77f315f60b0b025e0007_!!344107-0-picassobanner.jpg",
        "https://gw.alicdn.com/imgextra/i3/174/O1CN01UWVYg41D9jWRVr4oN_!!174-0-lubanu.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
        "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
        "https://gw.alicdn.com/imgextra/i1/16/O1CN018Jl82t1BzMwQ8RyOE_!!16-0-lubanu.jpg",
        "https://img.alicdn.com/tps/i4/TB1TnkoJ.H1gK0jSZSySuttlpXa.jpg",
        "https://gw.alicdn.com/imgextra/i2/70/O1CN01sEjNMZ1CO6KX22B76_!!70-0-lubanu.jpg"
      ]
    };
  }
};
</script>

<style >
.img {
  height: 3.2rem;
}
.my-swipe {
  height: 3.2rem;
}
.my-swipe .van-swipe-item {
  height: 3.2rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-swipe__indicator {
  margin-bottom: 3px;
  opacity: 0.5;
  width: 8px !important;
  height: 8px;
  transition: none;
}
.van-swipe__indicator--active {
  background-color: rgb(255, 80, 0);
  transition: none;
  opacity: 1;
}
.van-swipe__indicator:not(:last-child) {
  margin-right: 2px;
}
</style>
