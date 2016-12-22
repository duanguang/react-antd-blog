import { push } from "route";
export var RoutesPath;
(function (RoutesPath) {
    RoutesPath.RoutePath = {
        Index: () => '/index',
        Cate: (id) => `/cate/list/${id}`,
        Content: (id) => `/cate/content/${id}`,
        notFound: () => '/404',
        wareSearch: (keyWord) => `/ware/search/${keyWord}`
    };
    function goIndex() {
        return push(RoutesPath.RoutePath.Index());
    }
    RoutesPath.goIndex = goIndex;
    function goCate(id) {
        return push(RoutesPath.RoutePath.Cate(id));
    }
    RoutesPath.goCate = goCate;
    function goContent(id) {
        return push(RoutesPath.RoutePath.Content(id));
    }
    RoutesPath.goContent = goContent;
})(RoutesPath || (RoutesPath = {}));
