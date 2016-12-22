/**
 * Created by xiaoduan on 2016/12/13.
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
interface ICateItemListStateProps{
    selectedCateId?:string;
    pageListCate?:PromiseState<CatePageListEntity>;
}

interface ICateItemListDispatchProps{
    onGetPageListCate?:(page:number,queryParams?:{},sortParams?:{})=>void;
}

interface ICateItemListProps{
}

@connect<ICateItemListStateProps,ICateItemListDispatchProps,ICateItemListProps>(
    (state:IBlogIndexStore)=>{
        return{
            selectedCateId:state.blogIndex.selectedCateId,
            pageListCate:state.blogIndex.pageListCate
        }
    },
    (dispatch:Dispatch)=>{
        return{
            onGetPageListCate:(page:number,queryParams?:{},sortParams?:{})=>dispatch(BlogIndexActions.getPageListCate(page,queryParams,sortParams))
        }
    }
)

export default class CateItemList extends React.Component<ICateItemListStateProps&ICateItemListDispatchProps&ICateItemListProps,void>{
     constructor(props){
         super(props);
     }
     componentDidMount(){
         this.props.onGetPageListCate(1);
     }
     renderLink(){
         if(this.props.pageListCate.data&&this.props.pageListCate.status===PromiseStatus.Loaded){
             let pageListCate:CateEntity[]=this.props.pageListCate.data.rows;
             return pageListCate.map((item:CateEntity,index:number)=>{
                 if(this.props.selectedCateId===item.id){
                     return(
                         <li key={`menu-item-${index}`} className=" uk-active">
                             <Link to={RoutePath.Cate(item.id)}>{item.cateName}</Link>
                         </li>
                     )
                 }
                 return(
                     <li key={`menu-item-${index}`}>
                         <Link to={RoutePath.Cate(item.id)}>{item.cateName}</Link>
                     </li>
                 )
             })
         }

     }
     render(){
         return(
             <ul  className="nav uk-nav uk-hidden-small">
                 {this.renderLink()}
             </ul>
         )
     }
}