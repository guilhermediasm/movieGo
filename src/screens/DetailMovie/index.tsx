import React, { FC, useEffect } from 'react';

import { NavigationActions, Routes, useRoute } from '~/navigation';
import { useMovie, useShop } from '~/stores';
import { getBoughtMovie, getTextGenereDetails, useAlerts } from '~/utils';
import { DetailsMovieModalScreenParams } from '~/utils/types';

import DetailMovie from './DetailMovie';

export const DetailMovieContainer: FC = () => {
  const { params } = useRoute<DetailsMovieModalScreenParams>();
  const movie = useMovie();
  const shop = useShop();
  const { showError, showSuccess } = useAlerts();

  const getDetailsMovie = async () => {
    try {
      await movie.getDetailMovie(params.idMovie);
    } catch (error) {
      showError('Ocorreu um erro em exibir o detalhe do filme');
    }
  };

  const BuyNow = () => {
    try {
      const informationBuyMovie = {
        id: movie.detailsMovie.id,
        title: movie.detailsMovie.title,
        genre: getTextGenereDetails(movie.detailsMovie.genres),
        price: movie.detailsMovie.price,
        uri: `https://image.tmdb.org/t/p/original${
          movie.detailsMovie.poster_path
            ? movie.detailsMovie.poster_path
            : movie.detailsMovie.backdrop_path
        }`,
      };
      const newBuy = shop.buyMovie.concat(informationBuyMovie);

      shop.addBuyMovie(newBuy);
      showSuccess('Filme adquirido com sucesso');
    } catch (error) {
      showError('Ocorreu um erro em adquirir o filme');
    }
  };

  const onGoBack = () => {
    movie.clearDetailsMovie();
    NavigationActions.goBack();
  };

  useEffect(() => {
    getDetailsMovie();
  }, []);

  return (
    <DetailMovie
      bought={getBoughtMovie(movie.detailsMovie.id, shop.buyMovie)}
      BuyNow={BuyNow}
      detailsMovie={movie.detailsMovie}
      onGoBack={() => onGoBack()}
    />
  );
};
export default DetailMovieContainer;
