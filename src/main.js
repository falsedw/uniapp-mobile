  import { createSSRApp } from "vue";
  import App from "./App.vue";
  import 'virtual:uno.css'
  // 引入全局 uView 框架
  import uviewPlus from 'uview-plus'
  import { createPinia } from 'pinia'
  import TabBar from '@/components/myTabbar/index.vue'
  import myHeader from '@/components/myHeader/index.vue';

  
  export function createApp() {
    const app = createSSRApp(App);
    // 在这里实例化Vue并挂载到app上
    app.use(uviewPlus);
    const pinia = createPinia()
    app.component('TabBar',TabBar);
    app.component('myHeader',myHeader);
    app.use(pinia)
    return {
      app,
    };
  }
  