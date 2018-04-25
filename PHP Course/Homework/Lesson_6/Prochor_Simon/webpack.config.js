var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
        SassWebpackPlugin = require('sass-webpack-plugin'),
	CopyWebpackPlugin     = require('copy-webpack-plugin');

var src = path.join(__dirname, 'src');

function makeConf(options) {

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
            new CopyWebpackPlugin([
                {from: path.join(src, 'php'),to: ''},
            ]),
        ]
    };

    // solution?
    var pages = fs.readdirSync( src );
    pages.forEach(function(filename) {
        var m = filename.match(/(.+)\.pug$/);
        if(m) {
            var conf = {
                template:  path.join(src, filename),
                filename: m[1] + '.html'
            };

            config.plugins.push(new HtmlWebpackPlugin(conf));
        }
    });

    return config;
}



module.exports = makeConf;