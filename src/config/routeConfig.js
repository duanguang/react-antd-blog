import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { WXRouter } from 'utils/route';
import App from 'container/common/App';
import { store } from "store/index";
import { RoutesPath } from 'action/system/routesPath';
import NotFound from "../component/common/NotFound";
var RoutePath = RoutesPath.RoutePath;
/**
 * 第二个参数可以设置初始状态。 这对开发同构应用时非常有用，
 * 可以用于把服务器端生成的 state 转变后在浏览器端传给应用
 */
/*const store = configureStore({});*/
const history = syncHistoryWithStore(hashHistory, store);
const Overview = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('container/common/Overview').default);
    }, 'Overview');
};
const Index = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('container/guest/Index').default);
    }, 'default');
};
const ContentIndex = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('container/guest/ContentItemList').default);
    }, 'list');
};
const ContentDetail = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('container/guest/ContentDetail').default);
    }, 'detail');
};
export const routes = (React.createElement(Provider, {store: store}, React.createElement(WXRouter, {history: history}, React.createElement(Route, {path: "/", component: App}, React.createElement(IndexRoute, {title: "笔记", getComponent: Index}), React.createElement(Route, {path: RoutePath.Index(), title: "笔记", getComponent: Index}, React.createElement(Route, {path: RoutePath.Cate(':id'), title: "文章列表信息", getComponent: ContentIndex}), React.createElement(Route, {path: RoutePath.Content(':id'), title: "文章列表信息", getComponent: ContentDetail})), React.createElement(Route, {path: RoutePath.notFound(), component: NotFound, title: "对不起，您访问的页面不存在"}), React.createElement(Redirect, {from: '*', to: RoutePath.notFound()})))));
