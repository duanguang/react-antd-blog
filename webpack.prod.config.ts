/**
 * Created by DuanG on 2016/12/13.
 */
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var px2rem = require('postcss-plugin-px2rem');
//var SplitByNamePlugin = require('split-by-path-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entry = {
    'common/core': ['babel-polyfill', 'ts-helpers', 'react','react-dom', 'react-router', 'react-redux', 'react-router-redux',
        'redux-thunk', 'classnames', 'superagent', 'fastclick'],
    'index': './src/entry/index.js'
};
module.exports = {
    entry: entry,
    resolve: {
        modulesDirectories: ['', 'src', 'node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json', 'ts','.css','.less', '.tsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|typings)/,
                include: /src/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less$/,
                //loader: 'style!css!postcss!less'
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!postcss!less'
                )
            },
            {
                test: /\.css$/,
                //loader: 'style!css!postcss'
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!postcss'
                )
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192'
            }
        ]
    },


    plugins: [
        /*new SplitByNamePlugin({
         buckets: [
         {
         name: 'vendor',
         regex: /node_modules/
         }
         ]
         }),*/
        // new webpack.optimize.CommonsChunkPlugin('common/core', 'common/core.js'),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('./src/entry/html-template'),
            appMountId: 'app',
            files: {
                "js": ["assets/head_bundle.js", "assets/main_bundle.js"],
            },
            hash:true,
            cache:false,
            minify:{
                removeComments:true,//移除HTML中的注释
                collapseWhitespace:false//删除空白符与换行符
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common/core', 'common/core.js'),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
};