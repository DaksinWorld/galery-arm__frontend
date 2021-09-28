const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, './dist'),
    devServer: {
        proxy : {
            '/': {
                target: 'https://protected-plains-17913.herokuapp.com'
            }
        }
    }
}
