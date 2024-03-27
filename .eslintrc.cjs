// eslint 格式化
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    // https://eslint.vuejs.org/user-guide/#usage
    "plugin:vue/vue3-recommended",
    // "./.eslintrc-auto-import.json",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    // "@unocss",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    createDefaultProgram: false,
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
    "vue/multi-word-component-names": 0,
    "vue/no-v-model-argument": "off",
    "vue/script-setup-uses-vars": "error",
    "vue/no-reserved-component-names": "error",
    "vue/custom-event-name-casing": "error",
    "vue/attributes-order": "warn",
    "vue/one-component-per-file": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "warn",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],

    "@typescript-eslint/no-empty-function": "error", // 关闭空方法检查
    "@typescript-eslint/no-explicit-any": "error", // 关闭any类型的警告
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": 2,
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": 2,
    // "no-debugger": import.meta.env.mode === "production" ? "error" : "off",

    "prettier/prettier": [
      "error",
      {
        useTabs: false, // 不使用制表符
      },
    ],

    "vue/html-closing-bracket-newline": "off",
  },
  // eslint不能对html文件生效
  overrides: [
    {
      files: ["*.html"],
      processor: "vue/.vue",
    },
  ],
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-globals
  globals: {
    DialogOption: "readonly",
    OptionType: "readonly",
  },
};
