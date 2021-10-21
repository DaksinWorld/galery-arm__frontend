module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'https://quiet-basin-40455.herokuapp.com'
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : 'https://quiet-basin-40455.herokuapp.com/'
}
