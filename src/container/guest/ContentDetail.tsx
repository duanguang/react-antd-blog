/**
 * Created by DuanG on 2016/12/16.
 */
import * as React from 'react';
import {connect} from 'react-redux';
import {PromiseState, PromiseStatus} from "../../utils/redux";
import {IBlogIndexStore} from "../../reducer/blogIndex";
import * as BlogIndexActions from 'action/guest/blogIndex';
import Dispatch = Redux.Dispatch;
import {ContentEntity} from "../../model/guest/contentPageListEntity";
import {RouteComponentProps} from "react-router";
import DocumentTitle from "component/common/DocumentTitle";
import RightContentItemList from "./RightContentItemList";

interface IContentDetailStateProps{
    contentItem?:PromiseState<ContentEntity>
}

interface IContentDetailDispatchProps{
    onGetContentItem?:(id:string)=>void;
}


interface IContentDetailRouteParams{
    id:string;
}

interface IContentDetailProps extends RouteComponentProps<void,IContentDetailRouteParams>{

}

function getContentDetailId(props:IContentDetailProps){
    return props.routeParams['id'];
}

@connect<IContentDetailStateProps,IContentDetailDispatchProps,IContentDetailProps>(
    (state:IBlogIndexStore)=>{
        return{
            contentItem:state.blogIndex.contentItem
        }
    },
    (dispatch:Dispatch)=>{
        return{
            onGetContentItem:(id:string)=>dispatch(BlogIndexActions.getContentItem(id))
        }
    }
)

export default class ContentDetail extends React.Component<IContentDetailStateProps&IContentDetailDispatchProps&IContentDetailProps,void>{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let id='';
        if(typeof(this.props.routeParams) != 'undefined'){
            id=getContentDetailId(this.props);
        }
        this.props.onGetContentItem(id);
    }
    getCateId(props) {
        let id = '';
        if (typeof(props.routeParams) != 'undefined') {
            id = getContentDetailId(props);
        }
        return id;
    }
    componentWillReceiveProps(nextProps) {
        if (typeof(nextProps.routeParams) != 'undefined') {
            if (getContentDetailId(nextProps) != this.getCateId(this.props)) {
                this.props.onGetContentItem(this.getCateId(nextProps));
            }
        }
    }
    render(){
        if (!this.props.contentItem.data || this.props.contentItem.status != PromiseStatus.Loaded) {
            return <div><DocumentTitle title="详细内容"/>加载中...</div>;
        }
        let item:ContentEntity=this.props.contentItem.data;
        return(
            <div id="content" className="uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-5-6 uk-grid uk-grid-collapse">
                <DocumentTitle title={item.title}/>
                <div className="uk-width-small-1-1 uk-width-medium-3-4 uk-width-large-7-10">
                    <div id="index" className="bs uk-text-break">
                    <article id="article" className="uk-article">
                        <h1 className="uk-article-title">{item.title}	</h1>

                        <ul className="singlenav uk-breadcrumb">
                            <li>日期：{item.date}</li>

                        </ul>

                        <div dangerouslySetInnerHTML={{__html:item.content}}></div>

                    </article>


                </div>
             </div>

                <RightContentItemList></RightContentItemList>



            </div>
        )
    }
}