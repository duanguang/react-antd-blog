var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { JsonProperty, deserialize } from "json-typescript-mapper/index";
export class ContentPageListEntity {
    constructor(api) {
        api = api || {};
        let result = api.result;
        this.rows = this.transformRows(result.Data);
        this.total = result.Total;
        this.pageIndex = result.PageIndex;
        this.pageSize = result.PageSize;
        this.totalPage = result.TotalPage;
    }
    transformRows(rows) {
        return (rows || []).map((row) => {
            return deserialize(ContentEntity, row);
        });
    }
}
export class ContentEntity {
    constructor() {
        this.title = void 0;
        this.contentId = void 0;
        this.date = void 0;
        this.summary = void 0;
        this.saveFolder = void 0;
        this.imageName = void 0;
        this.thumbUrl = void 0;
        this.content = void 0;
        //this.thumbUrl=`${this.saveFolder.replace('server','')}${this.imageName}`;
    }
    static transSource(entity) {
        return deserialize(ContentEntity, entity);
    }
}
__decorate([
    JsonProperty('_id'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "contentId", void 0);
__decorate([
    JsonProperty('Title'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "title", void 0);
__decorate([
    JsonProperty('Summary'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "summary", void 0);
__decorate([
    JsonProperty('SaveFolder'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "saveFolder", void 0);
__decorate([
    JsonProperty('ImageName'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "imageName", void 0);
__decorate([
    JsonProperty('CreateDate'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "date", void 0);
__decorate([
    JsonProperty('Content'), 
    __metadata('design:type', String)
], ContentEntity.prototype, "content", void 0);
