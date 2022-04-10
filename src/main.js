import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"//引用axios

// 注意：这种方式将会导入所有组件
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

//引入封装好的axios
import commonAxios from './plugins/axios';

const app = createApp(App) 
app.config.globalProperties.$axios = axios


app.use(router).use(commonAxios).use(NutUI).mount('#app')


