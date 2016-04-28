var path = require('path');

module.exports = {
  entry: path.join(__dirname, '/public/js/index.js'),
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    console: true
  }
};