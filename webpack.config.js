
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    entry: './assets/src/index.js',
  },
  node: {
    fs: "empty"
  },
  output: {
    path: `${__dirname}/assets`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 8080, // most common port
    contentBase: `${__dirname}/assets`,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // {
      //   use: 'babel-loader',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
            //   presets: ["react", ["es2015", { modules: false }]],
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                ['@babel/preset-react', { targets: { node: 'current' } }]
            ],
            //   plugins: ["transform-class-properties"],
            plugins: [
                [
                    "@babel/plugin-proposal-class-properties", { "loose": true }
                ],
                // ["react-hot-loader/babel"]

            ],
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      { test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }, // this is to read fonts
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};


