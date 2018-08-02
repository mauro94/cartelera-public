var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/public');

module.exports = {
    entry: {
        app: './src/app/config/index.js'
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Cartelera - Public',
            chunksSortMode: 'dependency',
            template: path.resolve('src/app/config/index.ejs')
        }),
    ],

    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js',
    },

    resolve: {
        modules: [__dirname, './node_modules'],
        alias: {
            Style: 'src/app/style',
            Config: 'src/app/config/',
            Logic: 'src/app/logic/',
            Containers: 'src/app/components/containers/',
            Presentational: 'src/app/components/presentational/',
            Images: 'src/app/images/'
        },
        extensions: ['*', '.js', '.jsx']
    },

    loader: {
        appSettings: {
            name: 'app',
            env: process.env.build
        }
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        },
        {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|jp(e*)g)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'src/app/images/[hash]-[name].[ext]'
                }
            }]
        }
        ]
    }
}