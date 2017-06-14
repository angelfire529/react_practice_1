const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        //'react-hot-loader/patch',
         'webpack-dev-server/client?http://localhost:9000',
         'webpack/hot/only-dev-server',
        //'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/scripts/main.js')  ///src
        ],
    output: {
        path: __dirname + '/dist/scripts',
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    target: 'web',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            port: 9000,
            hot: true
            //stats: "errors-only"
    },    
    module : {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                include: path.join(__dirname, 'src'),
                loader: "babel-loader",
                query: {
                    presets:["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','sass-loader']
                }))
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'dist/styles/index.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Demo',
            hash: true,
            template: './index.html'
        })
    ]
};