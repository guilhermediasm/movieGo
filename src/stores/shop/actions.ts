import { SHOP } from '~/utils';

export const addBuyMovie = (buy: AddBuyMovieParams[]) => ({
  type: SHOP.ADD_BUY_MOVIE,
  payload: buy,
});

export const clear = () => ({
  type: SHOP.CLEAR,
  payload: [],
});
