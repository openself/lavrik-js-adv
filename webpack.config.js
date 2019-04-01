/* global require __dirname module */
const path = require('path')

const conf = {
    // entry: './es6/lesson02/lesson02.js',
    entry: './es6/hw02/hw02_test.js',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
            }
        ]
    }
}

module.exports = (env, options) => {
    conf.devtool = options.mode == "production" ?
        false :
        "cheap-module-eval-source-map"

    return conf
}