/* eslint-disable prettier/prettier */
module.exports = {
    devServer: {
        proxy: {
            '/oauth': {
                target: 'http://172.30.3.217:9090',
                ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'http://172.30.3.217:9090',
                ws: true,
                changeOrigin: true
            }
        }
    }
}