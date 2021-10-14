const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    outputDir: path.resolve(__dirname, '../project/build'),
    devServer: {
        proxy: 'http://localhost:1337',
    }
}
