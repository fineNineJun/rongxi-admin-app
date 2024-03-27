import { createApp } from "vue";
import App from "./App.vue";

/** 重置样式 这里引入自定义的重置样式也可 */
import "@unocss/reset/tailwind-compat.css";
// 引入项目的自定义样式，需要在引入unocss之前
import "./style.css";
import "virtual:uno.css";

createApp(App).mount("#app");
