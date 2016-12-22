import configureStore from 'store/configureStore';
import rootReducer from "reducer/rootReducer";
export const store = configureStore(rootReducer);
