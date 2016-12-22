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
import { Link } from 'react-router';
import { RoutesPath } from 'action/system/routesPath';
var RoutePath = RoutesPath.RoutePath;
import VPagination from "../../component/common/VPagination";
import RightContentItemList from "./RightContentItemList";
function getContentId(props) {
    return props.routeParams['id'];
}
let ContentItemList = class ContentItemList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.onGetPageListContent(1, this.getCateId(this.props));
        this.props.onSelectedCateId(this.getCateId(this.props));
    }
    getCateId(props) {
        let id = '';
        if (typeof (props.routeParams) != 'undefined') {
            id = getContentId(props);
        }
        return id;
    }
    onChangePage(curr) {
        this.props.onGetPageListContent(curr, this.getCateId(this.props));
    }
    componentWillReceiveProps(nextProps) {
        if (typeof (nextProps.routeParams) != 'undefined') {
            if (getContentId(nextProps) != this.getCateId(this.props)) {
                this.props.onGetPageListContent(1, getContentId(nextProps));
                this.props.onSelectedCateId(this.getCateId(nextProps));
            }
        }
    }
    renderLink() {
        if (this.props.pageListContent.data && this.props.pageListContent.status === PromiseStatus.Loaded) {
            let pageListContent = this.props.pageListContent.data.rows;
            return pageListContent.map((item, index) => {
                return (React.createElement("article", {className: "article", key: item.contentId}, React.createElement("h1", null, React.createElement(Link, {to: RoutePath.Content(item.contentId)}, item.title)), React.createElement("p", null, React.createElement(Link, {to: RoutePath.Content(item.contentId)}, React.createElement("img", {src: `${item.saveFolder.replace('server', '')}${item.imageName}`})), item.summary, "  […]", React.createElement("time", null, React.createElement("br", null), item.date))));
            });
        }
    }
    renderPageContainer() {
        let total = 0;
        if (this.props.pageListContent.data && this.props.pageListContent.status === PromiseStatus.Loaded) {
            total = this.props.pageListContent.data.total;
        }
        return (React.createElement(VPagination, {defaultCurrent: 1, total: total, showTotal: total => `共 ${total} 条`, defaultPageSize: 4, onChange: this.onChangePage.bind(this)}));
    }
    render() {
        return (React.createElement("div", {id: "content", className: "uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-5-6 uk-grid uk-grid-collapse"}, React.createElement("div", {className: "uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-7-10"}, React.createElement("div", {id: "index", className: "bs uk-text-break"}, React.createElement("h4", null, "最新文章"), React.createElement("div", {id: "list"}, this.renderLink())), React.createElement("ul", {className: "uk-pagination"}, this.renderPageContainer())), React.createElement(RightContentItemList, null)));
    }
};
ContentItemList = __decorate([
    connect((state) => {
        return {
            pageListContent: state.blogIndex.pageListContent
        };
    }, (dispatch) => {
        return {
            onSelectedCateId: (cateId) => dispatch(BlogIndexActions.selectedCateId(cateId)),
            onGetPageListContent: (page, id, sortParams) => dispatch(BlogIndexActions.getPageListContent(page, id, sortParams))
        };
    }), 
    __metadata('design:paramtypes', [Object])
], ContentItemList);
export default ContentItemList;
