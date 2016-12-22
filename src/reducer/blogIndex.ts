/**
 * Created by xiaoduan on 2016/12/13.
 */
import {PromiseState, promiseReducer, IPromiseAction, PromiseStatus} from "utils/redux";
import {combineReducers} from "redux";
import {CatePageListEntity} from "../model/guest/catePageListEntity";
import * as ActionTypes from 'action/guest/blogIndex';
import {ContentPageListEntity, ContentEntity} from "../model/guest/contentPageListEntity";
import IActionGeneric = Redux.IActionGeneric;

export interface IBlogIndexStore{
    blogIndex:IBlogIndexReducer;
}

export interface IBlogIndexReducer{
    pageListCate:PromiseState<CatePageListEntity>;
    pageListContent:PromiseState<ContentPageListEntity>;
    contentItem:PromiseState<ContentEntity>;
    selectedCateId:string;
}

const initState:IBlogIndexReducer={
    pageListCate:new PromiseState<CatePageListEntity>(),
    pageListContent:new PromiseState<ContentPageListEntity>(),
    contentItem:new PromiseState<ContentEntity>(),
    selectedCateId:''
}

function pageListCate(state:PromiseState<CatePageListEntity>=initState.pageListCate,action:IPromiseAction<string,CatePageListEntity>):PromiseState<CatePageListEntity>{
    let newPageListCate=null;
    switch(action.type){
        case ActionTypes.GET_PAGE_LIST_CATE.REQUEST:
            newPageListCate=new PromiseState<CatePageListEntity>(PromiseStatus.Loading);
            break;
        case ActionTypes.GET_PAGE_LIST_CATE.SUCCESS:
            newPageListCate=state.success(action.payload);
            break;
        case ActionTypes.GET_PAGE_LIST_CATE.FAIL:
            newPageListCate=state.fail(action.error);
            break;
    }
    if(!newPageListCate){
        return state;
    }
    return newPageListCate;
}

function pageListContent(state:PromiseState<ContentPageListEntity>=initState.pageListContent,action:IPromiseAction<string,ContentPageListEntity>):PromiseState<ContentPageListEntity>{
    let newPageListContent=null;
    switch(action.type){
        case ActionTypes.GET_PAGE_LIST_CONTENT.REQUEST:
            newPageListContent=new PromiseState<ContentPageListEntity>(PromiseStatus.Loading);
            break;
        case ActionTypes.GET_PAGE_LIST_CONTENT.SUCCESS:
            newPageListContent=state.success(action.payload);
            break;
        case ActionTypes.GET_PAGE_LIST_CONTENT.FAIL:
            newPageListContent=state.fail(action.error);
            break;
    }
    if(!newPageListContent){
        return state;
    }
    return newPageListContent;
}

function contentItem(state:PromiseState<ContentEntity>=initState.contentItem,action:IPromiseAction<string,ContentEntity>):PromiseState<ContentEntity>{
    let newContentItem=null;
    switch(action.type){
        case ActionTypes.GET_CONTENT_DETAIL.REQUEST:
            newContentItem=new PromiseState<ContentEntity>(PromiseStatus.Loading);
            break;
        case ActionTypes.GET_CONTENT_DETAIL.SUCCESS:
            newContentItem=state.success(action.payload);
            break;
        case ActionTypes.GET_CONTENT_DETAIL.FAIL:
            newContentItem=state.fail(action.error);
            break;
    }
    if(!newContentItem){
        return state;
    }
    return newContentItem;
}

function selectedCateId(state:string=initState.selectedCateId,action:IActionGeneric<string>):string{
    switch (action.type){
        case ActionTypes.SELECTED_CATEID:
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    pageListCate,
    pageListContent,
    contentItem,
    selectedCateId
})