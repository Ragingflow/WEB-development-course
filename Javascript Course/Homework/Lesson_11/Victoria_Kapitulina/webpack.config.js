const webpack = require('webpack'),
      path    = require('path');


module.exports = {

  entry: './app/script.js',
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
    ]
  },

  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      validate: 'jquery-validation/dist/jquery.validate.js'
    },
    modules: [
      path.resolve('./node_modules/')
    ]
  }


}
