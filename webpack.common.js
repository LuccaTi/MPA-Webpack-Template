import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        home: './src/pages/home/home.entry.js',
        secondPage: './src/pages/second-page/second.entry.js',
        thirdPage: './src/pages/third-page/third.entry.js',
        fourthPage: './src/pages/fourth-page/fourth.entry.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/home/home.template.html',
            filename: 'index.html',
            chunks: ['global', 'home'],
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/second-page/second.template.html',
            filename: 'second.html',
            chunks: ['global', 'secondPage'],
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/third-page/third.template.html',
            filename: 'third.html',
            chunks: ['global', 'thirdPage'],
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/fourth-page/fourth.template.html',
            filename: 'fourth.html',
            chunks: ['global', 'fourthPage'],
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'global',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};