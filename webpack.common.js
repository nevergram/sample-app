const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: APP_PATH
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {exclude: ['.gitignore']}),
    new HtmlWebpackPlugin({inject: true, template: path.join(APP_PATH, 'index.html')}),
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};