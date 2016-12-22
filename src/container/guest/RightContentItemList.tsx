/**
 * Created by DuanG on 2016/12/19.
 */
import * as React from 'react';
import {connect} from 'react-redux';
import {PromiseState, PromiseStatus} from "../../utils/redux";
import {IBlogIndexStore} from "../../reducer/blogIndex";
import * as BlogIndexActions from 'action/guest/blogIndex';
import Dispatch = Redux.Dispatch;
import {Link} from 'react-router';
import {RoutesPath} from 'action/system/routesPath';
import RoutePath=RoutesPath.RoutePath;
import {ContentPageListEntity, ContentEntity} from "../../model/guest/contentPageListEntity";


interface IRightContentItemListStateProps {
    selectedCateId?:string;
    pageListContent?:PromiseState<ContentPageListEntity>;
}

interface IRightContentItemListDispatchProps {
}



interface IRightContentItemListProps {

}

@connect<IRightContentItemListStateProps,IRightContentItemListDispatchProps,IRightContentItemListProps>(
    (state:IBlogIndexStore)=> {
        return {
            selectedCateId:state.blogIndex.selectedCateId,
            pageListContent: state.blogIndex.pageListContent
        }
    },
    (dispatch:Dispatch)=> {
        return {
        }
    }
)

export default class RightContentItemList extends React.Component<IRightContentItemListStateProps&IRightContentItemListDispatchProps,void>{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }

    renderContentItem() {
        if (this.props.pageListContent.data && this.props.pageListContent.status === PromiseStatus.Loaded) {
            let pageListContent:ContentEntity[] = this.props.pageListContent.data.rows;
            return pageListContent.map((item:ContentEntity, index:number)=> {
                return (
                    <li key={item.contentId}>
                        <Link to={RoutePath.Content(item.contentId)}>{item.title}</Link>
                    </li>
                )
            })
        }

    }
    render(){
        return(
            <div id="sidebar" className="uk-width-small-1-1 uk-width-medium-1-4 uk-width-large-3-10">
                <ul className="ul">
                    <li><h4>提示</h4>
                        <div className="textwidget">小工具栏后台是可以设置关闭的</div>
                    </li>
                    <li><h4>最新发表</h4>
                        <ul>
                            {this.renderContentItem()}
                        </ul>
                    </li>
                </ul>
                <ul id="ulsid" className="ul">

                    <li className="adimg"><a href="/" target="_blank"><img
                        src={require('../../public/images/016699565eaff132f875ae342bd9aa-683x1024.jpg')}/></a></li>
                </ul>
            </div>
        )
    }
}