const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      publicPath: './',
      path: path.resolve(__dirname, 'dist/'),
      filename: 'js/app.bundle.js'
  },
  devServer: {
      contentBase: './dist',
      writeToDisk: true,
      watchContentBase: true,
      port: 9876
  },
  module: {
      rules: [
          {
              test: /\.scss$/,
              include: /src/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',

              ],
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.html$/,
              use: [
              {
                  loader: "html-loader",
                  options: { minimize: false }
              }
              ]
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/'
                  }
                }
              ]
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: './assets/images/'
                  }
                }
              ]
            },
            {
              test: /\.mp4$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: './assets/videos/'
                  }
                }
              ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "[id].css"
        }),
        // new CleanWebpackPlugin()
    ],
}; 