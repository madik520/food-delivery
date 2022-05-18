import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/combineReducer';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;