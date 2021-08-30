const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  target: 'web',
  mode: 'development',
  watch: process.env.NODE_ENV === 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '',
    filename: "web.js",
    chunkFilename: '[name].js',
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [{
      test: /.tsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      use: [
        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }, 
    {
      test: /\.html$/,
      use: [
        { 
          loader: "html-loader",
          options: {
            minimize: true
          }
        }
      ]
    }
  ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
}