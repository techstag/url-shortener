const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, 'index.ts'),
  target: 'node',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: "index.js",
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
  ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
}