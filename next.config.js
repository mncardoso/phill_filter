module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["images.ctfassets.net"],
		loader: "akamai",
		path: "",
	},
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "postcss-loader"],
			},
			{
				test: /\.jsx?$/,
				use: ["babel-loader", "astroturf/loader"],
			},
		],
	},
};
