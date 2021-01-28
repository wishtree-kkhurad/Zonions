// require("@babel/polyfill"); // necesarry
// const webpack = require("webpack");
// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const WebpackRTLPlugin = require("webpack-rtl-plugin");
// const WebpackMessages = require("webpack-messages");
// const del = require("del");


// // global variables
// const rootPath = path.resolve(__dirname);
// const distPath = rootPath + '/.tmp/public';

// // const entries = { "sass/style.react": "./assets/src/index.scss" };


// module.exports = {

//     mode: "development",
//     stats: "errors-only",

//     entry:
//         ['@babel/polyfill', './assets/src/index.js'],

//     performance: {
//         hints: false
//     },
//     output: {
//         // main output path in assets folder
//         // path: distPath,
//         // output path based on the entries' filename
//         // filename: "[name].js",

//         path: `${__dirname}/assets`,
//         filename: 'bundle.js',
//         publicPath: '/',
//     },

//     // output: {
//     //   path: __dirname + '/.tmp/public',
//     //   filename: 'bundle.js'
//     // },

//     // watch:true,
//     devServer: {
//         port: 8080, // most common port
//         contentBase: `${__dirname}/assets`,
        // hot: true,
        // inline: true,
        // historyApiFallback: true,
//     },

//     resolve: {
//         extensions: [".scss", ".css", ".ts", ".tsx", ".js", ".jsx", ".json"]
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx|ts|tsx)$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: "babel-loader",
//                 options: {
//                     //   presets: ["react", ["es2015", { modules: false }]],
//                     presets: [
//                         ['@babel/preset-env', { targets: { node: 'current' } }],
//                         ['@babel/preset-react', { targets: { node: 'current' } }]
//                     ],
//                     //   plugins: ["transform-class-properties"],
//                     plugins: [
//                         [
//                             "@babel/plugin-proposal-class-properties", { "loose": true }
//                         ],
//                         // ["react-hot-loader/babel"]

//                     ],
//                 }
//             },
//             // {
//             //     use: 'babel-loader',
//             //     test: /\.js$/,
//             //     exclude: /node_modules/
//             // },
//             {
//                 test: /\.(sass|less|css)$/,
//                 use: [{
//                     loader: "style-loader"
//                 }, {
//                     loader: "css-loader"
//                 }, {
//                     loader: "less-loader",
//                     options: {
//                         javascriptEnabled: true
//                     }
//                 }],
//                 // loaders: ['style-loader', 'css-loader', 'less-loader']
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     "css-loader",
//                     {
//                         loader: "sass-loader",
//                         options: {
//                             sourceMap: true,
//                         }
//                     },
//                 ]
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
//                 loader: 'file-loader?name=assets/[name].[hash].[ext]'
//             }
//         ]
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'assets/public/index.html'
//         }),

//         // create css file
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//         }),
//         new WebpackRTLPlugin({
//             filename: "[name].rtl.css",
//         }),
        // new webpack.HotModuleReplacementPlugin()
//     ]


// };


const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    entry: './assets/src/index.js',
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


