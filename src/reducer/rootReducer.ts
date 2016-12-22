/**
 * Created by DuanG on 2016/12/12.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reduxAsyncConnect, IReduxAsyncConnect} from 'redux-async-connect';
import app, {IAppReducer} from 'common/app';
import blogIndex,{IBlogIndexReducer} from './blogIndex';

export interface IStoreState{
    app:IAppReducer;
    blogIndex:IBlogIndexReducer;
}
export default combineReducers({
    app,
    //viewState,
    blogIndex,
    reduxAsyncConnect: reduxAsyncConnect,
    routing: routerReducer,
});//合并Reducer