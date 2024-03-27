// css 格式化
module.exports = {
    // 继承推荐规范配置
    extends: [
      'stylelint-config-standard',
      'stylelint-config-recommended-scss',
      'stylelint-config-recommended-vue/scss',
      'stylelint-config-html/vue',
      'stylelint-config-recess-order',
    ],
    // 指定不同文件对应的解析器
    overrides: [
      {
        files: ['**/*.{vue,html}'],
        customSyntax: 'postcss-html',
      },
      {
        files: ['**/*.{css,scss}'],
        customSyntax: 'postcss-scss',
      },
    ],
    // 自定义规则
    rules: {
      // 允许 global 、export 、v-deep等伪类
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
        },
      ],
      // scss 语法提示
      // 参考 https://github.com/stylelint/stylelint/issues/3190
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true,
      // css书写顺序
      'order/order': ['declarations', 'custom-properties', 'dollar-variables', 'rules', 'at-rules'],
      'order/properties-order': [
        'position',
        'z-index',
        // 其他样式的顺序
      ],
      // 其他规则
      'no-empty-source': null,
    },
  }