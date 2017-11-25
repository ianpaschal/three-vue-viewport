const Path = require("path");
module.exports = {
	watch: true,
	entry: "./src/main.js",
	output: {
		path: Path.resolve( __dirname, "packed"),
		publicPath: "packed/",
		filename: "main.pack.js"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
				query: {
					name: "[name].[ext]?[hash]"
				}
			}
		]
	},
	resolve: {
		alias: { vue: "vue/dist/vue.min.js" }
	}
};
