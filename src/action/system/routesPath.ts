/**
 * Created by xiaoduan on 2016/11/16.
 */
import {push} from "route";
export module RoutesPath{

    export const RoutePath = {
        Index:()=>'/index',
        Cate: (id:string)=>`/cate/list/${id}`,
        Content: (id:string)=>`/cate/content/${id}`,
        notFound:()=>'/404',
        wareSearch: (keyWord:string)=>`/ware/search/${keyWord}`
    };
    export function  goIndex(){
        return push(RoutePath.Index());
    }
    export function goCate(id:string){
        return push(RoutePath.Cate(id));
    }
    export function goContent(id:string){
        return push(RoutePath.Content(id));
    }

}