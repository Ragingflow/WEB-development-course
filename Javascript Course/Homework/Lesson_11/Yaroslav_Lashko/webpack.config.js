let path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './App','./js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js?/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3001,
        contentBase: './App',
        inline: true
    }
};
