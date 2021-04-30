const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
        })
    ],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
}