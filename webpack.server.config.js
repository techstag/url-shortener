const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

let webpackPlugins = [
  new ForkTsCheckerWebpackPlugin()
]

if (process.env.NODE_ENV !== 'production') {
  webpackPlugins.push(new WebpackShellPluginNext({
    onBuildExit: {
      scripts: ['npm run start-dev'],
      blocking: false,
      parallel: true
    }
  }))
}

module.exports = {
  entry: path.join(__dirname, 'index.ts'),
  target: 'node',
  mode: 'development',
  watch: process.env.NODE_ENV === 'development',
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
  plugins: webpackPlugins,
}