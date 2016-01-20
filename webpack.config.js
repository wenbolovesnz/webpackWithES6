var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, 'js/app.js')
	],
	output: {
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'js'),
				loader: 'babel-loader',
				query: {
					presets: ["es2015"]
				}
			}
		]
	},
	debug: true

};

