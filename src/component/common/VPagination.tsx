/**
 * Created by DuanG on 2016/12/19.
 */
import * as React from 'react';
import {Pagination} from 'antd';
import FilterPropsComponent from "../abstract/FilterPropsComponent";

export interface IVPaginationProps{
    defaultCurrent?:number;
    total?:number;
    defaultPageSize?:number;
    pageSize?:number;
    onChange?:Function;
    showSizeChanger?:boolean;
    pageSizeOptions?:Array<number>;
    onShowSizeChange?:Function;
    showQuickJumper?:boolean;
    size?:'small'|'';
    simple?:Object;//'true'
    showTotal?:Function;
}
interface IVPaginationStates{

}
export default class VPagination extends FilterPropsComponent<IVPaginationProps,IVPaginationStates>{
    constructor(props){
        super(props);
    }

    render(){
        const newProps = super.getFilterProps();
        return(
            <Pagination
                {...newProps}
            />
        )
    }
}