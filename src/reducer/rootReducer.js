import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import app from 'common/app';
import blogIndex from './blogIndex';
export default combineReducers({
    app,
    //viewState,
    blogIndex,
    reduxAsyncConnect: reduxAsyncConnect,
    routing: routerReducer,
});
