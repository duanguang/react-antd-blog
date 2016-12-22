import * as React from 'react';
import 'public/css/style.css';
import CateItemList from "./CateItemList";
import ContentItemList from "./ContentItemList";
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {id: "main", className: "wp uk-grid uk-grid-collapse", style: { maxWidth: "1120px" }}, React.createElement("div", {className: "uk-width-small-1-1 uk-width-medium-1-4 uk-width-large-1-6 posr"}, React.createElement("div", {id: "head", "data-uk-sticky": "{boundary: true,top:80}"}, React.createElement("div", {id: "op_head"}, React.createElement("div", {className: "uk-panel", id: "op_hed"}, React.createElement("div", {className: "tx"}, React.createElement("a", {href: "/", "data-uk-modal": true}, React.createElement("img", {src: require('../../public/images/827244201012741428.jpg')}))), React.createElement("h1", {className: "uk-panel-title"}, React.createElement("a", {href: "/"}, "笔记")), React.createElement("span", null, "铃铛咽,百花凋,人影渐瘦鬓如霜"), React.createElement("div", {className: "my uk-grid-collapse uk-grid uk-grid-width-1-3"}), React.createElement(CateItemList, null))), React.createElement("div", {className: "ft uk-hidden-small"}, React.createElement("p", null, React.createElement("a", {href: "/", "data-uk-modal": true}, "友情链接"), " -", React.createElement("a", {href: "/", target: "_black", title: ""}, "Theme by React"))))), this.props.children || React.createElement(ContentItemList, null)));
    }
}
