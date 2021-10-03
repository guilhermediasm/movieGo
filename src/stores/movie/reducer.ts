import { MOVIE } from '~/utils';
import { Action, MovieState } from './types';

const defaultSegments: MovieApi = {} as MovieApi;
const defaultGenereMovie: GenereMovie[] = [];
const defaultDetailsMovie: DetailMovie = {} as DetailMovie;

const initialState: MovieState = {
  allMovies: defaultSegments,
  allMoviesPopular: defaultSegments,
  allGenereMovie: defaultGenereMovie,
  detailsMovie: defaultDetailsMovie,
};

export const reducer = (state: MovieState = initialState, action: Action) => {
  switch (action.type) {
    case MOVIE.SET_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };

    case MOVIE.SET_GENRE_MOVIE:
      return {
        ...state,
        allGenereMovie: action.payload,
      };
    case MOVIE.SET_ALL_MOVIES_POPULAR:
      return {
        ...state,
        allMoviesPopular: action.payload,
      };
    case MOVIE.SET_DETAILS_MOVIE:
      return {
        ...state,
        detailsMovie: action.payload,
      };
    case MOVIE.SET_CLEAR_DETAILS_MOVIE:
      return {
        ...state,
        detailsMovie: defaultDetailsMovie,
      };
    default:
      return state;
  }
};

export default reducer;
