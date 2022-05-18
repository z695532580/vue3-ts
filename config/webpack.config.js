const { resolve } = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');
const argv = require('minimist')(process.argv.slice(2));
const { mode } = argv;
const config = require(`./webpack.${mode}`);
const WebpackBar = require('webpackbar');
const baseConfig = {
    entry: './src/index.ts', // 入口文件
    output: {
        path: resolve(__dirname, '../dist/'), // 打包后的文件存放的地方
        filename: '[name].js', // 打包后输出文件的文件名
    },
    cache: {
        type: 'filesystem', // 默认为内存缓存
    },

    performance: {
        hints: false, // 关闭性能提示
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //配置处理 css文件的第三方loader规则
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'], //配置处理 css文件的第三方loader
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], //配置处理 css文件的第三方loader
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'cache-loader', // 缓存loader
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            configFile: false,
                            presets: [
                                '@babel/preset-env', // 可以识别es6语法
                                '@vue/babel-preset-jsx', // 解析jsx语法
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsxSuffixTo: [/\.vue$/, /\.md$/],
                        },
                    },
                ],
            },

            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境', // 项目标题
        }),
        new VueLoaderPlugin(),
        new WebpackBar(),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '@': resolve(__dirname, '../src'),
        },
    },

    mode,
};

module.exports = merge(baseConfig, config);
