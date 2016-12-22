/**
 * Created by DuanG on 2016/12/12.
 */
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
/*var px2rem = require('postcss-plugin-px2rem');*/
//var SplitByNamePlugin = require('split-by-path-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
/*let extractCSS = new ExtractTextPlugin('styles.css');
let extractLESS = new ExtractTextPlugin('style.css');*/
/*var autoprefixer = require('autoprefixer');*/
var entry = { "common/core": [
        'react', 'react-dom', 'react-router', 'react-redux', 'react-router-redux', 'redux-thunk', 'classnames', 'superagent',
    ],
    'index': './src/entry/index.js'
};
module.exports = {
    entry: entry,
    resolve: {
        modulesDirectories: ['', 'src', 'node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json',]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: '[chunkhash:5].[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|typings)/,
                include: /src/,
                loaders: ['react-hot', 'babel-loader'],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.css$/,
                //loader: 'style!css!postcss'
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /ts\-helpers/,
                loader: 'imports?this=>window'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [],
    plugins: [
        /*new SplitByNamePlugin({
         buckets: [
         {
         name: 'vendor',
         regex: /node_modules/
         }
         ]
         }),*/
        new webpack.optimize.CommonsChunkPlugin('common/core', 'common/core.js'),
        new ExtractTextPlugin('styles.css'),
        /*extractCSS,
        extractLESS,*/
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('./src/entry/html-template'),
            appMountId: 'app',
            files: {
                //"css": [ "src/public/css/style.css" ],
                "js": ["assets/head_bundle.js", "assets/main_bundle.js"],
            },
            hash: true,
            cache: false,
            minify: {
                removeComments: true,
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.DefinePlugin({
            __DEV__: true,
            'process.env.NODE_ENV': true
        }),
        new OpenBrowserPlugin({ url: `http://localhost:8890` }),
    ]
};
