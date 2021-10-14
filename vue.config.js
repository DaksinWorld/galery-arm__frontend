module.exports = {
    devServer: {
        proxy : {
            '/': {
                target: 'https://quiet-basin-40455.herokuapp.co'
            }
        }
    }
}
