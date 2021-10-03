import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

import { addBuyMovie, clear } from './actions';
import { removeMovieBuy } from './thunk';

export default function useShop() {
  const dispatch = useDispatch();
  const { buyMovie } = useSelector((state: RootState) => state.shop);

  return {
    addBuyMovie: (buy: AddBuyMovieParams[]) => dispatch(addBuyMovie(buy)),
    removeMovieBuy: (id: number) => dispatch(removeMovieBuy(id, buyMovie)),
    clear: () => dispatch(clear()),
    buyMovie,
  };
}
