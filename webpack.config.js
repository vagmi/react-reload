var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'bundle/js'),
    filename: 'app.js',
    publicPath: '/scripts/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.woff$|\.woff2$/,
        loader : "url-loader?limit=100000",
      },
      {
        test: /\.svg$|\.jpg$|\.png$|\.gif$/,
        loader : "url-loader?limit=100000",
      },
      {
        test: /\.ttf$|\.eot$/,
        loader : "url-loader?limit=100000",
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot','babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        loader: "!style!css!less"
      }]
  }
};
