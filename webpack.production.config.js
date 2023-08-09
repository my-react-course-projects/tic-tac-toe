const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
        index: './src/scripts/index.js',
        // print: './src/scripts/print.js'
    }, 
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        static: './dist',
        open: true,
        hot: true,
        port: 3000,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: [ MiniCssExtractPlugin.loader, 'css-loader'] 
            },
           { 
                test: /\.scss$/i, 
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] 
           },
           {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [ 'file-loader' ]
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
         ],
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Project Title',
            // filename: '../index.html'
            template: 'src/index.hbs',
            // description: 'Some Description'
            // meta: { description: 'Some description'}
        }),

        new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns : [
            '**/*'
        ]
      }),
    ],
}