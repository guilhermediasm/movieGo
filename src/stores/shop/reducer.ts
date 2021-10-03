import { SHOP } from '~/utils';
import { Action, ShopState } from './types';

const defaultBuyMovie: AddBuyMovieParams[] = [];

const initialState: ShopState = {
  buyMovie: defaultBuyMovie,
};

export const reducer = (state: ShopState = initialState, action: Action) => {
  switch (action.type) {
    case SHOP.CLEAR:
      return {
        ...state,
      };

    case SHOP.ADD_BUY_MOVIE:
      return {
        ...state,
        buyMovie: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
