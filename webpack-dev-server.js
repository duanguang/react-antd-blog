var request = require('request');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.js");
var proxy = require('express-http-proxy');
var port = 8890;
config.entry['common/core'].unshift("webpack-dev-server/client?http://localhost:" + port, "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
var compiler = webpack(config);
var bundleStartTime;
compiler.plugin('compile', () => {
    console.info('Bundling...');
    bundleStartTime = Date.now();
});
compiler.plugin('done', () => {
    console.info(`Bundled in ${Date.now() - bundleStartTime} ms. ${new Date()}`);
});
var server = new WebpackDevServer(compiler, {
    contentBase: `./views`,
    hot: true,
    historyApiFallback: {
        rewrites: [
            { from: /\//, to: '/dist/index.html' },
        ],
    },
    host: '0.0.0.0',
    quiet: false,
    noInfo: true,
    publicPath: "/dist/",
    stats: { colors: true },
    proxy: {
        '*': {
            //path: /^\/(?!(webpack\-dev\-server)|(webpack)|(sockjs\-node)|(Q\.Draft)).*$/i,
            target: 'http://code.nc119.cn/',
            secure: false,
            bypass: function (req, res, proxyOptions) {
                debugger;
                if (req.originalUrl === '/') {
                    return '/dist/index.html';
                }
            },
            onProxyReq: (proxyReq, req, res) => {
                proxyReq.setHeader('host', '127.0.0.1');
            }
        }
    },
    setup: function (app) {
    }
});
server.listen(port, null, function () {
    console.log(`http://localhost:${port}`);
});
