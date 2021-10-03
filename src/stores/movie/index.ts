import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setClearDetailsMovie } from './actions';
import {
  getAllMovie,
  getAllMoviesPopular,
  getDetailMovie,
  getGenreMovie,
} from './thunk';

export default function useMovie() {
  const dispatch = useDispatch();
  const { allMovies, allMoviesPopular, allGenereMovie, detailsMovie } =
    useSelector((state: RootState) => state.movie);

  return {
    getAllMovies: async (page: number, oldMovies?: MOVIES[]) =>
      dispatch(getAllMovie(page, oldMovies)),
    getAllMoviesPopular: async (page: number, oldMovies?: MOVIES[]) =>
      dispatch(getAllMoviesPopular(page, oldMovies)),
    getDetailMovie: async (idMovie: number) =>
      dispatch(getDetailMovie(idMovie)),
    getGenreMovie: async () => dispatch(getGenreMovie()),
    clearDetailsMovie: () => dispatch(setClearDetailsMovie()),
    allMovies,
    allGenereMovie,
    allMoviesPopular,
    detailsMovie,
  };
}
