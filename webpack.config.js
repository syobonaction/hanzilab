const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'public',
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        alias: {
            views: path.resolve(__dirname, 'src/views/'),
            components: path.resolve(__dirname, 'src/components/'),
            stores: path.resolve(__dirname, 'src/stores/'),
            images: path.resolve(__dirname, 'src/img/'),
        }
    },
};