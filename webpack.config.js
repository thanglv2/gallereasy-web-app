const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/app.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js', '.jsx',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
};
