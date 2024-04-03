const { legacyCreateProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        legacyCreateProxyMiddleware({
            target: 'https://lingvasfero.totouiproject.ovh',
            changeOrigin: true,
        })
    );
};