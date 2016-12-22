import {JsonProperty, deserialize} from "json-typescript-mapper/index";
/**
 * Created by xiaoduan on 2016/12/13.
 */

export class CatePageListEntity{
    public rows:Array<CateEntity>;

    public total:number;

    public pageIndex:number;

    public pageSize:number;

    public totalPage:number;

    public constructor(api?:any){
        api=api||{};
        let result=api.result;
        this.rows=this.transformRows(result.Data);
        this.total=result.Total;
        this.pageIndex=result.PageIndex;
        this.pageSize=result.PageSize;
        this.totalPage=result.TotalPage;
    }
    private transformRows(rows: Array<any>): Array<CateEntity> {
        return (rows || []).map((row: any)=> {
            return deserialize(CateEntity, row);
        })
    }
}

export class CateEntity{

    @JsonProperty('_id')
    public id:string;

    @JsonProperty('CateName')
    public cateName:string;

    public constructor(){
        this.id=void 0;
        this.cateName=void 0;
    }
}