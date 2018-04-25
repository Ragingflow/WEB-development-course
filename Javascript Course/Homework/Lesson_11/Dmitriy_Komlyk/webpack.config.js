var path = require('path');

module.exports = {
   entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /\.js?/,
                exclude:/node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './dist',
        inline: true
    }


};