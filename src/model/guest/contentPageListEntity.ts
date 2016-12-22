/**
 * Created by duanguang on 2016/12/18.
 */
import {JsonProperty, deserialize} from "json-typescript-mapper/index";


export class ContentPageListEntity{
    public rows:Array<ContentEntity>;

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
    private transformRows(rows: Array<any>): Array<ContentEntity> {
        return (rows || []).map((row: any)=> {
            return deserialize(ContentEntity, row);
        })
    }

}

export class ContentEntity{

    @JsonProperty('_id')
    public contentId:string;

    @JsonProperty('Title')
    public title:string;

    @JsonProperty('Summary')
    public summary:string;

    public thumbUrl:string;

    @JsonProperty('SaveFolder')
    public saveFolder:string;

    @JsonProperty('ImageName')
    public imageName:string;

    @JsonProperty('CreateDate')
    public date:string;

    @JsonProperty('Content')
    public content:string;

    constructor(){
        this.title=void 0;
        this.contentId=void 0;
        this.date=void 0;
        this.summary=void 0;
        this.saveFolder=void 0;
        this.imageName=void 0;
        this.thumbUrl=void 0;
        this.content=void 0;
        //this.thumbUrl=`${this.saveFolder.replace('server','')}${this.imageName}`;
    }
    public static transSource(entity: ContentEntity) {
        return deserialize(ContentEntity, entity);
    }
}