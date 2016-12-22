/**
 * Created by xiaoduan on 2016/12/13.
 */
import {PromiseActionType, PromiseAction, createAction} from "utils/redux";
import * as blogServices from 'api/guest/blogService';
import {CatePageListEntity} from "../../model/guest/catePageListEntity";
import {ContentPageListEntity, ContentEntity} from "../../model/guest/contentPageListEntity";
export const GET_PAGE_LIST_CATE=new PromiseActionType('blog/blogIndex/GET_PAGE_LIST_CATE');
export const GET_PAGE_LIST_CONTENT=new PromiseActionType('blog/blogIndex/GET_PAGE_LIST_CONTENT');
export const GET_CONTENT_DETAIL=new PromiseActionType('blog/blogIndex/GET_CONTENT_DETAIL');
export const SELECTED_CATEID='blog/blogIndex/SELECTED_CATEID';

export function getPageListCate(page:number,queryParams?:{},sortParams?:{}){
    return(dispatch)=>{
        dispatch(new PromiseAction<void,CatePageListEntity>(
            ()=>blogServices.getPageListCate(page),
            GET_PAGE_LIST_CATE.types
        ))
    }
}

export function getPageListContent(page:number,id?:string,sortParams?:{}){
    return(dispatch)=>{
        dispatch(new PromiseAction<void,ContentPageListEntity>(
            ()=>blogServices.getPageListContent(page,id),
            GET_PAGE_LIST_CONTENT.types
        ))
    }
}

export function getContentItem(id:string){
    return(dispatch)=>{
        dispatch(new PromiseAction<void,ContentEntity>(
            ()=>blogServices.getContentItem(id),
            GET_CONTENT_DETAIL.types
        ))
    }
}

export function selectedCateId(cateId:string){
    return createAction(SELECTED_CATEID,cateId);
}