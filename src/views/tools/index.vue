<template>
  <div>
    <!-- 头部导航 -->
    <nut-navbar :left-show="false" @on-click-right="rightClick" title="工具箱">
      <template #right>
        <nut-icon class="right" name="more-x"></nut-icon>
      </template>
    </nut-navbar>
    <nut-grid id="menu" :column-num="2"  :gutter="10">
      <nut-grid-item
        icon="github"
        text="Github"
        url="https://github.com"
      ></nut-grid-item>
      <nut-grid-item
        icon="home"
        text="百度"
        url="https://baidu.com"
      ></nut-grid-item>
    </nut-grid>
    <nut-grid :column-num="1" :border="false" :gutter="10">
      <nut-grid-item id="grid-item">
        <h3>全国疫情</h3>
        <nut-grid :column-num="2" :border="false" :gutter="10">
          <nut-grid-item>
            <span>新增本土</span>
            <nut-countup
              :scrolling="true"
              :init-num="1300"
              :end-num="1318"
              :speed="1"
              :during="150"
            ></nut-countup>
          </nut-grid-item>
          <nut-grid-item>
            <span>新增确诊</span>
            <nut-countup
              :scrolling="true"
              :init-num="2000"
              :end-num="2049"
              :speed="1"
              :during="150"
            ></nut-countup>
          </nut-grid-item>
        </nut-grid>
      </nut-grid-item>
    </nut-grid>
    <nut-empty image="empty" description="工具页面,程序员小哥正在开发中~">
      <div style="margin-top: 10px">
        <nut-button @click="gotoAbout" icon="find" type="success"
          >关于我们</nut-button
        >
      </div>
    </nut-empty>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  setup() {
    let date = "2022-04-10";

    return {
      date,
    };
  },
  methods: {
    gotoAbout(e) {
      router.push({ path: "/about" });
    },
  },
};
</script>
<style>
.nut-grid-item__content {
  box-shadow: 0 1px 7px #edeef1;
  border-radius: 6px;
  text-align: left;
  padding: 5px !important;
  align-items: normal !important;
}
.nut-grid-item__content--center {
  align-items: normal !important;
}
span {
  font-size: 12px;
}
#menu{
    padding-bottom: 20px;
}
#menu .nut-grid-item__content {
  /* box-shadow: none; */
  padding: 15px 8px !important;
  align-items: center !important;
}
.nut-icon {
  --animate-duration: 1s;
  --animate-delay: 0s;
}
</style>