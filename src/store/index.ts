/**
 * Created by DuanG on 2016/12/12.
 */
import configureStore from 'store/configureStore';
import rootReducer from "reducer/rootReducer";
export const store = configureStore(rootReducer);