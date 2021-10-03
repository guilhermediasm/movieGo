import React, { FC, useEffect, useState } from 'react';

import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useMovie } from '~/stores';
import { useAlerts } from '~/utils';

import Home from './Home';

export const HomeContainer: FC = () => {
  const movie = useMovie();
  const { showError } = useAlerts();
  const [isOnRefresh, setIsOnRefresh] = useState(false);
  const [page, setPage] = useState(1);

  const getAllMovies = () => {
    try {
      movie.getAllMovies(page);
    } catch ({ message }) {
      showError(message);
    }
  };

  const onRefresh = async () => {
    try {
      setIsOnRefresh(true);
      await movie.getAllMovies(1);
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
          await movie.getAllMovies(newPage, movie.allMovies.results);
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
    getAllMovies();
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
    <Home
      genere={movie.allGenereMovie}
      movies={movie.allMovies.results}
      refresh={onRefresh}
      onNavigate={onNavigate}
      isOnRefresh={isOnRefresh}
      onEndReached={onEndReached}
    />
  );
};
export default HomeContainer;
