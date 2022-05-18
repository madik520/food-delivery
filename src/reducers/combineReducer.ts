import { combineReducers } from 'redux';
import shoppingCart from './cartReduce';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCart
});

export type RootState = ReturnType<typeof rootReducer>;