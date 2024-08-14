/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const rootDir = path.resolve(process.cwd());
const srcPath = path.resolve(rootDir, 'src');
const buildPath = path.resolve(rootDir, 'build');
const assetsPath = path.resolve(rootDir, 'public');

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/index.js`
  },
  output: {
    path: buildPath,
    publicPath: `https://nhantran100215.github.io/${buildPath}/nhan-portfolio/`,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // create 'style' nodes from js string
          'style-loader',
          // translate commonjs into css
          'css-loader',
          // compiles sass to css
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', srcPath],
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/index.html`,
      favicon: `${assetsPath}/favicon.ico`,
    }),
    new webpack.DefinePlugin({
      // '/public': JSON.stringify(path.resolve(rootDir,"public")),
      '/': JSON.stringify(path.resolve(rootDir, 'public'))
      // 'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
    })
  ],
  devServer: {
    port: 3333,
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true /// add to use react-router
  },
  target: 'web'
};
