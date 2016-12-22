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
let CateItemList = class CateItemList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.onGetPageListCate(1);
    }
    renderLink() {
        if (this.props.pageListCate.data && this.props.pageListCate.status === PromiseStatus.Loaded) {
            let pageListCate = this.props.pageListCate.data.rows;
            return pageListCate.map((item, index) => {
                if (this.props.selectedCateId === item.id) {
                    return (React.createElement("li", {key: `menu-item-${index}`, className: " uk-active"}, React.createElement(Link, {to: RoutePath.Cate(item.id)}, item.cateName)));
                }
                return (React.createElement("li", {key: `menu-item-${index}`}, React.createElement(Link, {to: RoutePath.Cate(item.id)}, item.cateName)));
            });
        }
    }
    render() {
        return (React.createElement("ul", {className: "nav uk-nav uk-hidden-small"}, this.renderLink()));
    }
};
CateItemList = __decorate([
    connect((state) => {
        return {
            selectedCateId: state.blogIndex.selectedCateId,
            pageListCate: state.blogIndex.pageListCate
        };
    }, (dispatch) => {
        return {
            onGetPageListCate: (page, queryParams, sortParams) => dispatch(BlogIndexActions.getPageListCate(page, queryParams, sortParams))
        };
    }), 
    __metadata('design:paramtypes', [Object])
], CateItemList);
export default CateItemList;
