module.exports = {
  root: true, // 是否是根配置,配置文件可以继承
  parser: 'babel-eslint',
  // parserOptions: {
  //   //解析器的选项 AST语法树解析
  //   sourceType: 'module',
  //   ecmaVersion: 2015
  // },
  extends: 'airbnb-base',
  env: {
    // 指定运行环境
    browser: true,
    node: true
  },
  rules: {
    'vars-on-top': 0,
    'no-var': 0,
    'eol-last': 0,
    'no-console': 0,
    'func-names': 0
  }
}
