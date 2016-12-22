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
/**
 * Created by xiaoduan on 2016/12/13.
 */
export class CatePageListEntity {
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
            return deserialize(CateEntity, row);
        });
    }
}
export class CateEntity {
    constructor() {
        this.id = void 0;
        this.cateName = void 0;
    }
}
__decorate([
    JsonProperty('_id'), 
    __metadata('design:type', String)
], CateEntity.prototype, "id", void 0);
__decorate([
    JsonProperty('CateName'), 
    __metadata('design:type', String)
], CateEntity.prototype, "cateName", void 0);
