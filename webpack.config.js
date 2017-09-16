'use strict'

const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'stylint-loader'
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'style-loader!css-loader!stylus-loader'
            },


        ]

    }

}