const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', 'css', 'less']
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',

                // 在node_modules的文件不被babel编译
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],

                // src的文件会被babel编译
                include:[
                    path.resolve(__dirname, 'src'),
                ],

                // 只有jsx或者js文件会被编译
                test: /\.js|jsx$/,
                query:{

                    // babel支持把以下格式编译成 ES5语法
                    presets:[
                        'es2015', // ES6
                        'stage-0', // ES7
                        'react' // JSX
                    ]
                }
            },{
                test: /\.css|.less$/,
                loader: "style-loader!css-loader?modules&localIdentName=[local]!less-loader"
            },{
                test: /\.png|.jpg$/, 
                loader: "url-loader?limit=8192"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3000,
        stats: "errors-only", //命令行只打印错误的显示
        inline: true //自动刷新页面
    }
};