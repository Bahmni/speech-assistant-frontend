const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      getLocalIdent: (loaderContext, localIdentName, localName) => {
        const fileName = path.basename(loaderContext.resourcePath)
        if (fileName === 'index.scss') {
          return localName
        } else {
          const name = fileName.replace(/\.[^/.]+$/, '')
          return `${name}__${localName}`
          //
        }
      },
    },
  },
}
const config = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        use: 'swc-loader',
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', cssLoader, 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', cssLoader],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html', // to import index.html file inside index.js
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css'],
  },
}

module.exports = config
