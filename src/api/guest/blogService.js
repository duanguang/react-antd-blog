import { get } from "../../utils/fetchRequest";
import { CatePageListEntity } from "../../model/guest/catePageListEntity";
import { ContentPageListEntity, ContentEntity } from "../../model/guest/contentPageListEntity";
export function getPageListCate(page, queryParams, sortParams) {
    return get('/blog/GetPageCateList', { page: page }, CatePageListEntity).then((result) => {
        return result;
    });
}
export function getPageListContent(page, id, sortParams) {
    let request = {
        cateId: id,
        page: page
    };
    return get('/blog/GetContentPageList', request, ContentPageListEntity).then((result) => {
        return result;
    });
}
export function getContentItem(id) {
    return get('/blog/GetContentDetail', { id: id }).then((result) => {
        return ContentEntity.transSource(result.result);
    });
}
