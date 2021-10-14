const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../project/build'),
    devServer: {
        proxy: 'https://quiet-basin-40455.herokuapp.com',
    }
}
