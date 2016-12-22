var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as React from 'react';
import { connect } from 'react-redux';
import { PromiseStatus } from "../../utils/redux";
import * as BlogIndexActions from 'action/guest/blogIndex';
import DocumentTitle from "component/common/DocumentTitle";
import RightContentItemList from "./RightContentItemList";
function getContentDetailId(props) {
    return props.routeParams['id'];
}
let ContentDetail = class ContentDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let id = '';
        if (typeof (this.props.routeParams) != 'undefined') {
            id = getContentDetailId(this.props);
        }
        this.props.onGetContentItem(id);
    }
    getCateId(props) {
        let id = '';
        if (typeof (props.routeParams) != 'undefined') {
            id = getContentDetailId(props);
        }
        return id;
    }
    componentWillReceiveProps(nextProps) {
        if (typeof (nextProps.routeParams) != 'undefined') {
            if (getContentDetailId(nextProps) != this.getCateId(this.props)) {
                this.props.onGetContentItem(this.getCateId(nextProps));
            }
        }
    }
    render() {
        if (!this.props.contentItem.data || this.props.contentItem.status != PromiseStatus.Loaded) {
            return React.createElement("div", null, React.createElement(DocumentTitle, {title: "详细内容"}), "加载中...");
        }
        let item = this.props.contentItem.data;
        return (React.createElement("div", {id: "content", className: "uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-5-6 uk-grid uk-grid-collapse"}, React.createElement(DocumentTitle, {title: item.title}), React.createElement("div", {className: "uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-7-10"}, React.createElement("div", {id: "index", className: "bs uk-text-break"}, React.createElement("article", {id: "article", className: "uk-article"}, React.createElement("h1", {className: "uk-article-title"}, item.title, "\t"), React.createElement("ul", {className: "singlenav uk-breadcrumb"}, React.createElement("li", null, "日期：", item.date)), React.createElement("div", {dangerouslySetInnerHTML: { __html: item.content }})))), React.createElement(RightContentItemList, null)));
    }
};
ContentDetail = __decorate([
    connect((state) => {
        return {
            contentItem: state.blogIndex.contentItem
        };
    }, (dispatch) => {
        return {
            onGetContentItem: (id) => dispatch(BlogIndexActions.getContentItem(id))
        };
    }), 
    __metadata('design:paramtypes', [Object])
], ContentDetail);
export default ContentDetail;
