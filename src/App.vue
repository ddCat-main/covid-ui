<template>
  <div>
    <router-view />
    <nut-drag direction="y" :style="{ right: '0px', bottom: '80px' }">
      <nut-fixednav
        un-active-text="疫情菜单"
        active-text="收起菜单"
        v-model:visible="visible"
        :nav-list="navList"
        @selected="navSelected"
      />
    </nut-drag>


    <nut-tabbar
      unactive-color="#7d7e80"
      active-color="#1989fa"
      :bottom="true"
      :safeAreaInsetBottom="true"
      v-model:visible="tabbarActive" 
    >
      <nut-tabbar-item to="/" tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item to="/tools" tab-title="工具箱" icon="category"></nut-tabbar-item>
      <nut-tabbar-item to="/my" tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import router from "@/router/index.js";
// @ is an alias to /src
import { Notify } from '@nutui/nutui';

export default {
  mounted:function () {   
    this.resetActive()
  },
  setup() {
    const visible = ref(false);
    const tabbarActive = ref(0)
    const navList = reactive([
      {
        id: 1,
        text: "疫情锦囊",
        icon: "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
      },
      {
        id: 2,
        text: "小知识",
        icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
      },
      {
        id: 4,
        text: "关于我们",
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
      },
    ]);
    return {
      tabbarActive,
      visible,
      navList,
    };
  },
  methods: {
    resetActive() {
      //自动触发写入的函数
      console.log(router)
      let path = router.currentRoute._value.path
      if(path == '/') {
        this.tabbarActive = 0
      } else if(path == '/tools') {
        this.tabbarActive = 1
      } else if(path == '/my') {
        this.tabbarActive = 2
      }
      console.log('路径：', path, this.tabbarActive)
    },
    navSelected(data) {
      if(data.item.id == 4) {
        router.push('/about')
        this.visible = false;
      }else {
         Notify.warn(data.item.text + '正在开发中~');
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nut-fixednav__btn{
  background: linear-gradient(135deg,#63bbfd 0%,#8192fa 100%) !important;
}
</style>
