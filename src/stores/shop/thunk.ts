import { AppThunk } from '../store';
import { addBuyMovie } from './actions';

export const removeMovieBuy =
  (id: number, buyMovie: AddBuyMovieParams[]): AppThunk =>
  async (dispatch) => {
    const oldBuyMovie = buyMovie;
    const removeIndex = oldBuyMovie.findIndex((item) => item.id === id);
    oldBuyMovie.splice(removeIndex, 1);

    dispatch(addBuyMovie(oldBuyMovie));
  };
