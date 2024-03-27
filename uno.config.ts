// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  // 自定义简写以提供自动补齐建议。 如果 values 是一个数组，它将与 | 连接并用 () 封装。
  // 以下是我的部分配置
  shortcuts: [
    {
      "flex-center-center": "flex  justify-center items-center",
      "flex-between-center": "flex  justify-between items-center",
      "absolute-center":
        "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
      "border-s-w": "border-[1px] border-solid border-white",
      "hw-full": "h-full w-full",
      "hw-100": "h-[calc(100vh-70px)] w-screen",
      "t-3c": "text-[#3cbdc5]",
      "t-c": "text-center",
      "bg-3c": "bg-[#3cbdc5]",
      "border-b-solid": "border-b-1px border-b-solid border-b-[#e5e5e5]",
    },
  ],
  //  自定义css类
  rules: [
    [
      "bg-no-repeat-cover",
      { "background-repeat": "no-repeat", "background-size": "cover" },
    ],
    [/^br-(\d+)$/, ([, d]) => ({ "border-radius": `${d}px` })],
    [
      /^base-shadow-(\d+)$/,
      ([, d]) => ({ "box-shadow": `0 0 ${d}px 0 rgba(0, 0, 0, 0.05)` }),
    ],
  ],
  presets: [presetUno(), presetAttributify()],
});
