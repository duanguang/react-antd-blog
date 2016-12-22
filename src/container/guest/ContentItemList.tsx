/**
 * Created by DuanG on 2016/12/16.
 */
import * as React from 'react';
import {connect} from 'react-redux';
import {PromiseState, PromiseStatus} from "../../utils/redux";
import {CatePageListEntity, CateEntity} from "../../model/guest/catePageListEntity";
import {IBlogIndexStore} from "../../reducer/blogIndex";
import * as BlogIndexActions from 'action/guest/blogIndex';
import Dispatch = Redux.Dispatch;
import {Link} from 'react-router';
import {RoutesPath} from 'action/system/routesPath';
import RoutePath=RoutesPath.RoutePath;
import {ContentPageListEntity, ContentEntity} from "../../model/guest/contentPageListEntity";
import VPagination from "../../component/common/VPagination";
import {RouteComponentProps} from 'react-router';
import RightContentItemList from "./RightContentItemList";


interface IContentItemListStateProps {
    pageListContent?:PromiseState<ContentPageListEntity>;
}

interface IContentItemListDispatchProps {
    onSelectedCateId?:(cateId:string)=>void;
    onGetPageListContent?:(page:number, id?:string, sortParams?:{})=>void;
}

interface IContentItemListRouteParams {
    id:string;
}

interface IContentItemListProps extends RouteComponentProps<void,IContentItemListRouteParams> {

}

function getContentId(props:IContentItemListProps) {
    return props.routeParams['id'];
}

@connect<IContentItemListStateProps,IContentItemListDispatchProps,IContentItemListProps>(
    (state:IBlogIndexStore)=> {
        return {
            pageListContent: state.blogIndex.pageListContent
        }
    },
    (dispatch:Dispatch)=> {
        return {
            onSelectedCateId:(cateId:string)=>dispatch(BlogIndexActions.selectedCateId(cateId)),
            onGetPageListContent: (page:number, id?:string, sortParams?:{})=>dispatch(BlogIndexActions.getPageListContent(page, id, sortParams))
        }
    }
)

export default class ContentItemList extends React.Component<IContentItemListStateProps&IContentItemListDispatchProps&IContentItemListProps,void> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onGetPageListContent(1, this.getCateId(this.props));
        this.props.onSelectedCateId(this.getCateId(this.props));
    }

    getCateId(props) {
        let id = '';
        if (typeof(props.routeParams) != 'undefined') {
            id = getContentId(props);
        }
        return id;
    }
    onChangePage(curr){
        this.props.onGetPageListContent(curr, this.getCateId(this.props));
    }
    componentWillReceiveProps(nextProps) {
        if (typeof(nextProps.routeParams) != 'undefined') {
            if (getContentId(nextProps) != this.getCateId(this.props)) {
                this.props.onGetPageListContent(1, getContentId(nextProps));
                this.props.onSelectedCateId(this.getCateId(nextProps));
            }
        }
    }

    renderLink() {
        if (this.props.pageListContent.data && this.props.pageListContent.status === PromiseStatus.Loaded) {
            let pageListContent:ContentEntity[] = this.props.pageListContent.data.rows;
            return pageListContent.map((item:ContentEntity, index:number)=> {
                return (
                    <article className="article" key={item.contentId}>
                        <h1>
                            <Link to={RoutePath.Content(item.contentId)}>{item.title}</Link>
                        </h1>
                        <p><Link to={RoutePath.Content(item.contentId)}>
                            <img src={`${item.saveFolder.replace('server','')}${item.imageName}`}/>
                        </Link>
                            {item.summary}  [&hellip;]
                            <time><br/>{item.date}</time>
                        </p>
                    </article>
                )
            })
        }

    }

    renderPageContainer() {
        let total = 0;
        if (this.props.pageListContent.data && this.props.pageListContent.status === PromiseStatus.Loaded) {
            total = this.props.pageListContent.data.total;
        }
        return (
            <VPagination defaultCurrent={1} total={total}
                         showTotal={total => `共 ${total} 条`}
                         defaultPageSize={4}
                         onChange={this.onChangePage.bind(this)}
            ></VPagination>
        )
    }

    render() {
        return (
            <div id="content"
                 className="uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-5-6 uk-grid uk-grid-collapse">
                <div className="uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-7-10">
                    <div id="index" className="bs uk-text-break">
                        <h4>最新文章</h4>
                        <div id="list">

                            {this.renderLink()}
                        </div>
                    </div>
                    <ul className="uk-pagination">
                        {this.renderPageContainer()}

                    </ul>

                </div>

                 <RightContentItemList></RightContentItemList>


            </div>
        )
    }
}