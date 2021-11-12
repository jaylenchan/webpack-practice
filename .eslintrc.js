module.exports = {
  root: true, //是否是根配置,配置文件可以继承
  parserOptions: {
    //解析器的选项 AST语法树解析
    sourceType: 'module',
    ecmaVersion: 2015
  },
  env: {
    // 指定运行环境
    browser: true,
    node: true
  },
  rules: {
    indent: ['error', 2],
    'no-console': ['error']
  }
}
