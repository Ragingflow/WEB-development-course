var webpack = require('webpack');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
        SassWebpackPlugin = require('sass-webpack-plugin'),
	CopyWebpackPlugin     = require('copy-webpack-plugin');

var src = path.join(__dirname, 'src');

var config = {
    devServer: {
        hot: true,
        inline: true,
        port: 3001,
        contentBase: './build'
    },
    entry: ["babel-polyfill","./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js?/,
                exclude: /node_modules/

            }
        ],
        rules: [
            {
                test: /\.pug$/,
                use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new SassWebpackPlugin('./src/styles.scss',{
            sass: { outputStyle: 'compressed' }
        }),
        new HtmlWebpackPlugin({
            title: 'Use pug / scss',
            template: path.join(src, 'index.pug')
        }),
	    new CopyWebpackPlugin([
		    {from: path.join(src, 'php'),to: ''},
	    ]),
    ]
};

module.exports = config;