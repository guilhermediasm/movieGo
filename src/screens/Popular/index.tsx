import React, { FC, useEffect, useState } from 'react';

import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useMovie } from '~/stores';
import { useAlerts } from '~/utils';

import Popular from './Popular';

export const PopularContainer: FC = () => {
  const movie = useMovie();
  const { showError } = useAlerts();
  const [isOnRefresh, setIsOnRefresh] = useState(false);
  const [page, setPage] = useState(1);

  const getAllMoviesPopular = () => {
    try {
      movie.getAllMoviesPopular(page);
    } catch ({ message }) {
      showError(message);
    }
  };

  const onRefresh = async () => {
    try {
      setIsOnRefresh(true);
      await movie.getAllMoviesPopular(1);
      setIsOnRefresh(false);
    } catch ({ message }) {
      setIsOnRefresh(false);
      showError(message);
    }
  };

  const onEndReached = async () => {
    try {
      try {
        if (page < movie.allMovies.total_pages) {
          const newPage = page + 1;
          await movie.getAllMoviesPopular(newPage, movie.allMovies.results);
          setPage(newPage);
        }
      } catch ({ message }) {
        showError(message);
      }
    } catch ({ message }) {
      setIsOnRefresh(false);
      showError(message);
    }
  };

  useEffect(() => {
    getAllMoviesPopular();
  }, []);

  const onNavigate = (idMovie: number) => {
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.DETAIL_MODAL,
      params: {
        idMovie,
      },
    });
  };

  return (
    <Popular
      genere={movie.allGenereMovie}
      movies={movie.allMoviesPopular.results}
      refresh={onRefresh}
      isOnRefresh={isOnRefresh}
      onEndReached={onEndReached}
      onNavigate={onNavigate}
    />
  );
};
export default PopularContainer;
