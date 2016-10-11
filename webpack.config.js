var webpack = require('webpack');
var path = require('path');
var outputName = 'database';
var plugins = [], outputFile;

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.NODE_ENV;

console.log('env: ', env);

if (env === 'PROD') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = outputName + '.min.js';
} else {
    outputFile = outputName + '.js';
}

var config = {
    debug: true,
    entry: __dirname + '/src/main.ts',
    // devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        loaders: [
            // {
            //     test: /(\.js)$/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     },
            //     exclude: /(node_modules|bower_components)/
            // },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.ts?$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {},
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: plugins
};

module.exports = config;