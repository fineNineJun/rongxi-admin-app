import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

/** 重置样式 这里引入自定义的重置样式也可 */
import "@unocss/reset/tailwind-compat.css";
// 引入项目的自定义样式，需要在引入unocss之前
import "./assets/style.css";
import "virtual:uno.css";

async function setupApp() {
  const app = createApp(App);

  app.mount("#app");

  // 组件通信
  app.config.globalProperties.eventBus = mitt();
}

setupApp();
