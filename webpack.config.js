var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './source/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			comments: false,
			beautify: false,
			minimize: true,
			compress: true,
			mangle: {
                // Skip mangling these
				except: ['$super', '$', 'exports', 'require']
			}
		})
	]
}
