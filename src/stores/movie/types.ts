type Payload = [
  MOVIES[],
  MovieApi,
  GenereMovie[],
  DetailMovie,
  AddLikeMovieParams[],
];

export type Action = {
  type: string;
  payload: Payload;
};

export type MovieState = {
  allMovies: MovieApi;
  allMoviesPopular: MovieApi;
  allGenereMovie: GenereMovie[];
  detailsMovie: DetailMovie;
  allLikMovies: AddLikeMovieParams[];
};
