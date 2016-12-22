/**
 * Created by xiaoduan on 2016/12/13.
 */
import {get,post} from "../../utils/fetchRequest";
import {CatePageListEntity} from "../../model/guest/catePageListEntity";
import {ContentPageListEntity, ContentEntity} from "../../model/guest/contentPageListEntity";

export function getPageListCate(page:number,queryParams?:{},sortParams?:{}):Promise<CatePageListEntity>{
    return get('/blog/GetPageCateList',{page:page},CatePageListEntity).then((result)=>{
        return result;
    });
}

export function getPageListContent(page:number,id?:string,sortParams?:{}):Promise<ContentPageListEntity>{
    let request={
        cateId:id,
        page:page
    }
    return get('/blog/GetContentPageList',request,ContentPageListEntity).then((result)=>{
        return result;
    });
}

export function getContentItem(id:string):Promise<ContentEntity>{
    return get('/blog/GetContentDetail',{id:id}).then((result)=>{
        return ContentEntity.transSource(result.result);
    })
}