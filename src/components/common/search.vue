<template >
  <!-- 首页 ———— 顶部搜索组件 -->
  <div class="searchwrap">
    <van-popup class="popup" v-model="show" label="宝贝" position="top" :style="{ height: '37px'}">
      <van-search show-action @search="onSearch(value)" @cancel="onCancel" />
    </van-popup>
    <div class="searchbody" @click="getfocus">
      <div class="taoiconbody">
        <img src="@a/icon/logo.png" class="taobaoicon" />
      </div>
      <div class="searchinputbody" is-link @click="showPopup">
        <div class="searchinput">
          <img src="@a/icon/search.png" class="searchicon" />
          <div class="input">寻找宝贝店铺</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  name: "search",
  data() {
    return { show: false, value: "" };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    getfocus() {
      var input = document.querySelector(".van-field__control");
      input.focus();
    },
    onSearch() {
      var input = document.querySelector(".van-field__control");
      this.value = input.value;
      console.log("用户搜索商品:" + input.value);

      Toast(":) 搜索功能待开发");
    },
    onCancel() {
      // var pop = document.querySelector(".popup");
      // var overflow = document.querySelector(".van-overlay");
      // overflow.style.display = "none";
      // pop.style.display = "none";
      console.log("用户取消搜索");
      this.show = false;
    }
  }
};
</script>


<style >
.searchwrap {
  position: relative;
}
.popup {
  height: 37px;
  width: 10.05rem;
  left: 50%;
  transform: translateX(-50%);
}
.van-search__action {
  margin-top: 15px;
}
.van-search__content {
  height: 28px;
  background-color: rgb(230, 230, 230);
  margin-top: 12px;
  border-radius: 4px;
}
.van-search {
  height: 37px;
  margin-top: -6px;
  padding: 0;
  padding-left: 8px;
}
.searchbody {
  z-index: 10;
  position: fixed;
  display: flex;
  width: 10rem;
  top: 0;
  height: 37px;
  background-color: rgb(255, 133, 42);
}
.taoiconbody {
  position: relative;
  width: 43px;
  height: 37px;
}
.taobaoicon {
  position: absolute;
  left: 9px;
  top: 9px;
  width: 26px;
  vertical-align: center;
}
.searchicon {
  width: 16px;
}
.searchinputbody {
  flex: 1;
  padding-right: 8px;
}
.searchinput {
  position: relative;
  top: 6px;
  width: 100%;
  height: 25px;
  border-radius: 4px;
  background-color: rgb(255, 78, 34);
  text-align: center;
}
.searchicon {
  position: absolute;
  top: 4px;
  transform: translateX(-50px);
}
.input {
  margin-left: 20px;
  padding-top: 3px;
  font-size: 13px;
  font-weight: 600;
  color: rgb(240, 224, 220);
}
</style>

