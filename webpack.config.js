const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        another: {
            import: './src/another-module.js',
            dependOn: 'shared',
        },
        shared: 'lodash'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        })
    ],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
        clean: true,
        publicPath: '/'
    }
}