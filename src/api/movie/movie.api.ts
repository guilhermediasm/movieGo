import { ResponseError } from '~/utils';
import request from '../request';

export const getAllMovie = async (page: number): Promise<MovieApi> => {
  try {
    const { data } = await request.get(`/movie/top_rated?page=${page}`);

    return data;
  } catch (error: GenericError) {
    throw new ResponseError(error);
  }
};

export const getAllMoviesPopular = async (page: number): Promise<MovieApi> => {
  try {
    const { data } = await request.get(`/movie/popular?page=${page}`);

    return data;
  } catch (error: GenericError) {
    throw new ResponseError(error);
  }
};

export const getDetailMovie = async (idMovie: number): Promise<DetailMovie> => {
  try {
    const { data } = await request.get(`/movie/${idMovie}`);

    return data;
  } catch (error: GenericError) {
    throw new ResponseError(error);
  }
};

export const getGenereMovie = async (): Promise<GenreApi> => {
  try {
    const { data } = await request.get('/genre/movie/list');

    return data;
  } catch (error: GenericError) {
    throw new ResponseError(error);
  }
};
