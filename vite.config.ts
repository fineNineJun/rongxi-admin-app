import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),

    // 自动导入参考： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
    AutoImport({
      imports: ["vue"],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
        filepath: "./.eslintrc-auto-import.json",
      },
      vueTemplate: true,
      // 配置文件生成位置(false:关闭自动生成)
      dts: "types/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: "types/components.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
