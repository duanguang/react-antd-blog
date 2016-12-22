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
import { Link } from 'react-router';
import { RoutesPath } from 'action/system/routesPath';
var RoutePath = RoutesPath.RoutePath;
let RightContentItemList = class RightContentItemList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    renderContentItem() {
        if (this.props.pageListContent.data && this.props.pageListContent.status === PromiseStatus.Loaded) {
            let pageListContent = this.props.pageListContent.data.rows;
            return pageListContent.map((item, index) => {
                return (React.createElement("li", {key: item.contentId}, React.createElement(Link, {to: RoutePath.Content(item.contentId)}, item.title)));
            });
        }
    }
    render() {
        return (React.createElement("div", {id: "sidebar", className: "uk-width-small-1-1 uk-width-medium-1-4 uk-width-large-3-10"}, React.createElement("ul", {className: "ul"}, React.createElement("li", null, React.createElement("h4", null, "提示"), React.createElement("div", {className: "textwidget"}, "小工具栏后台是可以设置关闭的")), React.createElement("li", null, React.createElement("h4", null, "最新发表"), React.createElement("ul", null, this.renderContentItem()))), React.createElement("ul", {id: "ulsid", className: "ul"}, React.createElement("li", {className: "adimg"}, React.createElement("a", {href: "/", target: "_blank"}, React.createElement("img", {src: require('../../public/images/016699565eaff132f875ae342bd9aa-683x1024.jpg')}))))));
    }
};
RightContentItemList = __decorate([
    connect((state) => {
        return {
            selectedCateId: state.blogIndex.selectedCateId,
            pageListContent: state.blogIndex.pageListContent
        };
    }, (dispatch) => {
        return {};
    }), 
    __metadata('design:paramtypes', [Object])
], RightContentItemList);
export default RightContentItemList;
