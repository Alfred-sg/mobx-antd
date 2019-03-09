module.exports = {
  output: {
    library: 'mobx-antd',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  externals: {
    'mobx': 'mobx'
  },
  compress: false,
  devtool: false
};