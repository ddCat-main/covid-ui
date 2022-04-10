<template>
  <div>
    <nut-navbar @on-click-back="back" @on-click-title="title" title="关于我们">
      <template #left>
        <div>返回</div>
      </template>
      <template #right>
        <nut-icon class="right" name="share-n"></nut-icon>
      </template>
    </nut-navbar>
    <nut-cell-group title="ddCat提醒：">
        <nut-cell title="*本站非官方网站,仅用于交流和学习。本站数据均抓取自 上海发布公众号和上海卫健委网站。">
        </nut-cell>
        <nut-cell title="*本站不保证数据的正确性或完整性。 如有任何问题或异议请联系开发者。">
        </nut-cell>
        <nut-cell title="*“查询日期加14天就可解封” 为谣言，具体解封政策请咨询当地防疫机构。">
        </nut-cell>
        <nut-cell title="上海卫健委网站" desc="点击跳转" is-link url="https://wsjkw.sh.gov.cn/xwfb/index.html">
            <template v-slot:icon>
                <img
                class="nut-icon"
                src="https://wsjkw.sh.gov.cn/assets/img/ico/favicon.png"
                />
            </template>
        </nut-cell>
        <nut-cell title="开发者：&nbsp;ddCat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ：&nbsp;2695092045">
        </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  setup() {},
  methods: {
    back() {
      console.log("header头部， 点击返回");
      router.go(-1);
    },
    title() {
      console.log("header头部， 点击title");
    },
    rightClick() {
      console.log("右侧点击事件");
    },
  },
};
</script>
<style>
.nut-cell-group__title{
    padding-top: 15px;
}
.nut-icon{
    padding-right: 10px;
}
.nut-cell-group{
    box-shadow: 0 1px 7px #edeef1;
    border-radius: 10px;
}
</style>