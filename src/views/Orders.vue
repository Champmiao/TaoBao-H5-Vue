<template>
  <!-- 地址列表组件 -->
  <div>
    <div class="cartback">
      <div class="carttitle">地址列表(4)</div>
      <div class="ctrl">管理</div>
    </div>
    <div class="orderswrap">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  name: "orders",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "丁黄冈",
          tel: "18616834468 ",
          address: "辽宁省沈阳市浑南新区南屏中路6号3号楼606室 ",
          isDefault: true
        },
        {
          id: "2",
          name: "吴丽丽",
          tel: "13215684524",
          address: " 辽宁省沈阳市浑南区新隆街2甲号第5幢1202号"
        },
        {
          id: "3",
          name: "王小红",
          tel: "15684562845",
          address: " 辽宁省沈阳市浑南区新隆街2甲号第5幢1202号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王旭",
          tel: "1320000000",
          address: " 辽宁省沈阳市浑南区新隆街2甲号第5幢1202号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      Toast.loading({
        message: ":) 待开发",
        forbidClick: true,
        duration: 500
      });
    },
    onEdit(item, index) {
      Toast.loading({
        message: ":) 待开发",
        forbidClick: true,
        duration: 500
      });
    }
  }
};
</script>


<style scoped>
.carttitle {
  float: left;
  font-size: 0.533333rem;
  line-height: 0.586667rem;
  font-weight: bold;
  padding-left: 0.32rem;
  color: #fff;
}
.ctrl {
  margin-right: 0.4rem;
  float: right;
  font-size: 0.4rem;
  line-height: 0.586667rem;
  padding-left: 0.32rem;
  color: #fff;
}
.cartback {
  box-sizing: border-box;
  padding-top: 0.533333rem;
  width: 100%;
  height: 4rem;
  background-image: linear-gradient(-90deg, #ff5000 0%, #ff8400 100%);
}
.orderswrap {
  margin-top: -2.08rem;
}
.van-address-item {
  padding: 0.32rem;
  border-radius: 0.3rem;
}
.van-address-list__bottom {
  bottom: 43px;
  width: 10rem;
  left: 50%;
  transform: translateX(-50%);
}
.van-address-list {
  padding: 0.32rem 0.32rem 2.666667rem;
}
.van-address-item:not(:last-child) {
  margin-bottom: 0.32rem;
}
.van-cell {
  font-size: 0.373333rem;
  line-height: 0.64rem;
}
.van-address-item__name {
  margin-bottom: 0.213333rem;
  font-size: 0.426667rem;
  line-height: 0.586667rem;
}
.van-tag {
  font-size: 0.266667rem;
}
.van-address-item__address {
  font-size: 0.346667rem;
  line-height: 0.48rem;
}
</style>

