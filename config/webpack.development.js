const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
    devServer: {
        port: 8000,
        open: true,
        hot: true
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
}
