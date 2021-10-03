declare type MOVIES = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

declare type MovieApi = {
  page: number;
  results: MOVIES[];
  total_pages: number;
  total_results: number;
};

declare type GenereMovie = {
  id: number;
  name: string;
};

declare type GenreApi = {
  genres: GenereMovie[];
};

declare type DetailMovie = {
  price: number;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: GenereMovie[];
  homepage: null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

declare type AddBuyMovieParams = {
  id: number;
  price: number;
  title: string;
  genre: string[];
  uri: string;
};

declare type AddLikeMovieParams = {
  id: number;
  title: string;
  genre: string[];
  uri: string;
};
