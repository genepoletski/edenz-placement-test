const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestWebpackPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = merge(
  common,
  {
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist', 'npm-debug.log.*']),
      new ExtractTextPlugin("styles.css"),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: ({ resource }) => /node_modules/.test(resource)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new ManifestWebpackPlugin()
    ]
  }
);

module.exports = config;