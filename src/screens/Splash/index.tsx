import React, { FC, useEffect, useState } from 'react';

import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useMovie } from '~/stores';
import { useAlerts } from '~/utils';

import Splash from './Splash';

export const SplashContainer: FC = () => {
  const movie = useMovie();
  const { showError } = useAlerts();
  const [showProgressBar, setShowProgressBar] = useState(0);

  const getAllMovies = async () => {
    try {
      setShowProgressBar(showProgressBar + 0.33);
      await movie.getGenreMovie();
      setShowProgressBar(1);

      NavigationActions.resetRouteToTop(Stacks.PUBLIC);
    } catch ({ message }) {
      showError(message);
    }
  };

  useEffect(() => {
    setShowProgressBar(0.33);
    getAllMovies();
  }, []);

  const onNavigate = (screen: Routes) => {
    NavigationActions.navigate(screen);
  };

  return <Splash progress={showProgressBar} />;
};
export default SplashContainer;
