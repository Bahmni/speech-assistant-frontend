var webpack = require('webpack')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      // localIdentName: `[name]__[local]__[hash:base64:5]`,
      getLocalIdent: (loaderContext, localIdentName, localName) => {
        const fileName = path.basename(loaderContext.resourcePath)
        if (fileName == 'index.scss') {
          return localName
        } else {
          const name = fileName
          return `${name}__${localName}`
        }
        // return localName
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
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        use: 'swc-loader',
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        //use: ['style-loader', 'css-loader'],
        use: ['style-loader', cssLoader],
      },
      {
        test: /\.s[ac]ss$/,
        //use: ['style-loader', 'css-loader', 'sass-loader'],
        use: ['style-loader', cssLoader, 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html', // to import index.html file inside index.js
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css'],
  },
}

module.exports = config
