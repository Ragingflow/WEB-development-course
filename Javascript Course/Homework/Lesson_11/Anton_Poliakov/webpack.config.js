var path = require('path');
var webpack = require('webpack');

const SassPlugin = require('sass-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {

    entry: ["babel-polyfill","./app/index.js"],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
              test: /\.js?/,
              exclude: /(node_modules|bower_components)/,
              use: { loader: 'babel-loader' }
          },
          {   test: /\.css$/,
              use: [ 'css-loader']
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new SassPlugin('./app/style.scss',{
            sass: { outputStyle: 'compressed' }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "Tether": 'tether',
            "window.Tether": 'tether'
        })
    ],
    devServer: {
        port: 3001,
        contentBase: './build',
        inline: true
    }
};
