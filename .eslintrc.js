module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [2, 'never']
  },
  globals: {
    $: true,
    jQuery: true,
    BMap: true,
    window: true,
    webScoket: true,
    AMap: true,
    document: true,
    layui: true,
    layer: true,
    gantt: true
  }
}
