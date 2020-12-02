const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/clientes.html",
        filename: "index.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    }
}