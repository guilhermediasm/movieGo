import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import movie from './movie/reducer';
import { MovieState } from './movie/types';
import shop from './shop/reducer';
import { ShopState } from './shop/types';

export const rootReducer = combineReducers({ movie, shop });

export type RootState = {
  movie: MovieState;
  shop: ShopState;
};

/**
 * @description define type of Thunk Action
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
