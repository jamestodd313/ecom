const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: './src/vendor.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/template.html' }),
    ],
    output: {
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: "assets/imgs"
                    }
                }

            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: "assets/icons"
                    }
                }

            },
        ]
    }
}