'use strict'

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const fs = require('fs')
const path = require('path')


module.exports = {
	entry: ["@babel/polyfill", './src/index.js'],
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: path.join( __dirname ,'./node_modules')
		}]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
	},
	// node: {
	// 	fs: 'empty',
	// 	path: 'empty',
	// 	__filename: 'mock',
	// 	__dirname: 'mock',
	// },
	// target: "web",
	target: "node",
	node: {
		url: false
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	externals: fs.readdirSync("node_modules").map(function(module) {
		console.log(module)
		return "commonjs " + module
	  })
	// externals: [nodeExternals()],
};
