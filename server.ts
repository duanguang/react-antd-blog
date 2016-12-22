/**
 * Created by xiaoduan on 2016/12/14.
 */

var isDev = process.env.NODE_ENV !== 'dev';//如果等于dev启动client热更新
if (!isDev) {
    require('./src/utils/webpackInit');
}
