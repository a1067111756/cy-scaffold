const path = require('path')
const webpack = require('webpack')
const WebpackWindiCSSPlugin = require('windicss-webpack-plugin').default
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

module.exports = {
  publicPath: './',
  assetsDir: './static',
  chainWebpack: (config) => {
    // 配置别名
    config.resolve
      .alias.set('@', path.join(__dirname, './src'))

    // 配置svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, './src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, './src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: {
    plugins: [
      gitRevisionPlugin,
      new WebpackWindiCSSPlugin(),
      new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(gitRevisionPlugin.version()),
        'process.env.COMMIT': JSON.stringify(gitRevisionPlugin.commithash()),
        'process.env.BRANCH': JSON.stringify(gitRevisionPlugin.branch())
      })
    ]
  }
}
