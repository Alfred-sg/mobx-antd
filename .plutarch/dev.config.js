module.exports = {
  template: '../examples',
  entry: {
    index: 'examples/index'
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  alias: {
    'mobx-antd': 'src/index.ts'
  },
  module: {
    babel: {
      plugins: [
        [
          require.resolve('babel-plugin-import'),
          {
            "libraryName": "antd",
            "style": 'css'
          }
        ]
      ]
    }
  }
};