/**
 * Created by DuanG on 2016/12/12.
 */
import 'babel-polyfill';
import * as ReactDOM from "react-dom";
import {routes} from "../config/routeConfig";


ReactDOM.render(
    routes,
    document.getElementById('app')
);

