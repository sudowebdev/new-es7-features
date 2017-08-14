var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {

    entry: ['babel-polyfill', APP_DIR + '/index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                exclude: /(node_modules)/,
                loader : "babel-loader",
                query: {
                    "presets": ["es2015"],
                    "plugins": ["syntax-async-functions","transform-regenerator"]
                  }
            }
        ]
    },

    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.jsx']
    }


};

module.exports = config;
