const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Webpack = require('webpack')

module.exports = {
    mode:'development', 
    entry: path.resolve(__dirname,'./src/index.jsx'),    // 入口文件
    output: {
      filename: '[name].[hash:8].js',      // 打包后的文件名称
      path: path.resolve(__dirname,'./dist')  // 打包后的目录
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'./public/index.html')
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].css",
      }),
      new Webpack.HotModuleReplacementPlugin()
    ]
}