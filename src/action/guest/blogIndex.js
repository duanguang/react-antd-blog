import { PromiseActionType, PromiseAction, createAction } from "utils/redux";
import * as blogServices from 'api/guest/blogService';
export const GET_PAGE_LIST_CATE = new PromiseActionType('blog/blogIndex/GET_PAGE_LIST_CATE');
export const GET_PAGE_LIST_CONTENT = new PromiseActionType('blog/blogIndex/GET_PAGE_LIST_CONTENT');
export const GET_CONTENT_DETAIL = new PromiseActionType('blog/blogIndex/GET_CONTENT_DETAIL');
export const SELECTED_CATEID = 'blog/blogIndex/SELECTED_CATEID';
export function getPageListCate(page, queryParams, sortParams) {
    return (dispatch) => {
        dispatch(new PromiseAction(() => blogServices.getPageListCate(page), GET_PAGE_LIST_CATE.types));
    };
}
export function getPageListContent(page, id, sortParams) {
    return (dispatch) => {
        dispatch(new PromiseAction(() => blogServices.getPageListContent(page, id), GET_PAGE_LIST_CONTENT.types));
    };
}
export function getContentItem(id) {
    return (dispatch) => {
        dispatch(new PromiseAction(() => blogServices.getContentItem(id), GET_CONTENT_DETAIL.types));
    };
}
export function selectedCateId(cateId) {
    return createAction(SELECTED_CATEID, cateId);
}
