const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(
  common,
  {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      hotOnly: true,
      inline: true,
      open: true,
      overlay: {
        errors: true,
        warnings: true
      },
      port: 8080,
      proxy: {
        '/api': 'http://localhost:3000'
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)

module.exports = config;