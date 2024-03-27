import { loadEnv } from "vite";
import type { UserConfig, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "node:path";

const pathResolve = (dir: string) => {
  return resolve(__dirname, dir);
};

const viteConfig = ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  console.log("env:", env);

  const { VITE_PORT, VITE_OPEN } = env;

  return {
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
    resolve: {
      alias: {
        "@": pathResolve("src"),
        comp: pathResolve("src/components"),
        assets: pathResolve("src/assets"),
      },
    },
    server: {
      port: parseInt(VITE_PORT),
      open: VITE_OPEN != "false",
    },
  };
};

export default viteConfig;
