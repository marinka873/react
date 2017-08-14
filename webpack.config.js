let path = require('path');

let build_dir = path.resolve(__dirname, 'build');
let src_dir = path.resolve(__dirname, 'app');


let config = {
    entry: src_dir + 'index.js',
    output:{
        path: build_dir + '/app',
        filename: 'bundle.js',
        publicPath: '/app'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            include: src_dir,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    }
};

module.exports = config;