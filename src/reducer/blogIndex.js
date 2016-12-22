import { PromiseState, PromiseStatus } from "utils/redux";
import { combineReducers } from "redux";
import * as ActionTypes from 'action/guest/blogIndex';
const initState = {
    pageListCate: new PromiseState(),
    pageListContent: new PromiseState(),
    contentItem: new PromiseState(),
    selectedCateId: ''
};
function pageListCate(state = initState.pageListCate, action) {
    let newPageListCate = null;
    switch (action.type) {
        case ActionTypes.GET_PAGE_LIST_CATE.REQUEST:
            newPageListCate = new PromiseState(PromiseStatus.Loading);
            break;
        case ActionTypes.GET_PAGE_LIST_CATE.SUCCESS:
            newPageListCate = state.success(action.payload);
            break;
        case ActionTypes.GET_PAGE_LIST_CATE.FAIL:
            newPageListCate = state.fail(action.error);
            break;
    }
    if (!newPageListCate) {
        return state;
    }
    return newPageListCate;
}
function pageListContent(state = initState.pageListContent, action) {
    let newPageListContent = null;
    switch (action.type) {
        case ActionTypes.GET_PAGE_LIST_CONTENT.REQUEST:
            newPageListContent = new PromiseState(PromiseStatus.Loading);
            break;
        case ActionTypes.GET_PAGE_LIST_CONTENT.SUCCESS:
            newPageListContent = state.success(action.payload);
            break;
        case ActionTypes.GET_PAGE_LIST_CONTENT.FAIL:
            newPageListContent = state.fail(action.error);
            break;
    }
    if (!newPageListContent) {
        return state;
    }
    return newPageListContent;
}
function contentItem(state = initState.contentItem, action) {
    let newContentItem = null;
    switch (action.type) {
        case ActionTypes.GET_CONTENT_DETAIL.REQUEST:
            newContentItem = new PromiseState(PromiseStatus.Loading);
            break;
        case ActionTypes.GET_CONTENT_DETAIL.SUCCESS:
            newContentItem = state.success(action.payload);
            break;
        case ActionTypes.GET_CONTENT_DETAIL.FAIL:
            newContentItem = state.fail(action.error);
            break;
    }
    if (!newContentItem) {
        return state;
    }
    return newContentItem;
}
function selectedCateId(state = initState.selectedCateId, action) {
    switch (action.type) {
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
});
