var path = require('path')

module.exports = {
  entry: {
    'app.js': './client/app.js'
  },

  output: {
    filename: '[name]',
    // absolute path seems required here for watching to work
    path: __dirname + '/public/'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel'
      }
    ]
  }
}
