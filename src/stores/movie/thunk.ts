import { MovieApi } from '~/api';
import { genRand } from '~/utils';
import { AppThunk } from '../store';
import {
  setAllMovie,
  setAllMoviePopular,
  setDetailsMovie,
  setGenereMovie,
} from './actions';

/**
 * @description redux middleware for get all movies
 */

export const getAllMovie =
  (page: number, oldMovies?: MOVIES[]): AppThunk =>
  async (dispatch) => {
    const movies = await MovieApi.getAllMovie(page);
    if (movies.page > 2 && oldMovies) {
      const newListMovies = oldMovies?.concat(movies.results);

      movies.results = newListMovies;
    }

    dispatch(setAllMovie(movies));
  };

export const getGenreMovie = (): AppThunk => async (dispatch) => {
  const genere = await MovieApi.getGenereMovie();
  dispatch(setGenereMovie(genere.genres));
};

export const getDetailMovie =
  (idMovie: number): AppThunk =>
  async (dispatch) => {
    let details = await MovieApi.getDetailMovie(idMovie);

    details = { ...details, price: genRand(10, 100, 2) };

    dispatch(setDetailsMovie(details));
  };

export const getAllMoviesPopular =
  (page: number, oldMovies?: MOVIES[]): AppThunk =>
  async (dispatch) => {
    const movies = await MovieApi.getAllMoviesPopular(page);
    if (movies.page > 2 && oldMovies) {
      const newListMovies = oldMovies?.concat(movies.results);

      movies.results = newListMovies;
    }

    dispatch(setAllMoviePopular(movies));
  };
