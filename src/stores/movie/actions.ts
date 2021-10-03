import { MOVIE } from '~/utils';

export const setAllMovie = (movies: MovieApi) => ({
  type: MOVIE.SET_ALL_MOVIES,
  payload: movies,
});

export const setAllMoviePopular = (moviesPopular: MovieApi) => ({
  type: MOVIE.SET_ALL_MOVIES_POPULAR,
  payload: moviesPopular,
});

export const setGenereMovie = (genre: GenereMovie[]) => ({
  type: MOVIE.SET_GENRE_MOVIE,
  payload: genre,
});

export const setDetailsMovie = (detailsMovie: DetailMovie) => ({
  type: MOVIE.SET_DETAILS_MOVIE,
  payload: detailsMovie,
});

export const setClearDetailsMovie = () => ({
  type: MOVIE.SET_CLEAR_DETAILS_MOVIE,
});
