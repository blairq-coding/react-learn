const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const HtmlPlugin = require('html-webpack-plugin');
//复制index.html并自动引入内容中生成的js
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    mode: "development",
    context: path.resolve(__dirname),
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "js/bundel.js"
    },
    devServer: {
        open: true,
        progress: true, //打包进度

    },
    plugins: [htmlPlugin, new CleanWebpackPlugin(), new WebpackBar()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.sass|scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.png|jpg|gif|jpeg$/, use: ['url-loader?limit=5800&outputPath=img'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
        ]
    },
    // 不展示源码
    devtool: "nosources-source-map"
    // 展示源码
    // devtool: 'eval-source-map'
}