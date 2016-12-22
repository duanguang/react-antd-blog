/**
 * Created by DuanG on 2016/12/12.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpack.prod.config')
} else {
    module.exports = require('./webpack.dev.config')
}