/**
 * Created by DuanG on 2016/10/27.
 */
import PlainRoute=ReactRouter.PlainRoute;
import * as React from 'react';
import './css/Overview.css';
import {Link} from 'react-router';
import RouteComponentProps=ReactRouter.RouteComponentProps;
import GenericComponent from "../../component/abstract/GenericComponent";



interface IOverviewStateProps{
    routes:PlainRoute[];
}
export default class Overview extends GenericComponent<IOverviewStateProps,void>{
    private  basCls=`overview`;
    constructor(props){
        super(props);
    }
    replaceParamPath(path:string){
        if(!path){
            return path;
        }
        return path.replace(/(:.*)/g,"0");
    }
    renderItems(){
        return this.props.routes[0].childRoutes.map((childRoute:PlainRoute,index:number)=>{
            console.log(childRoute.path);
            return(
                <li className={`${this.basCls}-item`} key={index}>
                    <Link to={this.replaceParamPath(childRoute.path)}>{childRoute['title']}</Link>
                </li>
            )
        })
    }
       render(){
           return(
               <ul className={this.basCls}>
                   {this.renderItems()}
               </ul>
           )
       }
}
