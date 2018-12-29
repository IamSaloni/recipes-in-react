const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    context: path.join(__dirname,'src'),
    entry: './index.js',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: './bundle.js',
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: "development",
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        })
    ]
};