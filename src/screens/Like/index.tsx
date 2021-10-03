import React, { FC } from 'react';
import { useMovie } from '~/stores';
import { useAlerts } from '~/utils';

import Like from './Like';

export const LikeContainer: FC = () => {
  const movie = useMovie();
  const { showError, showSuccess } = useAlerts();

  const removeMovieLike = (id: number) => {
    try {
      movie.removeLikeMovie(id);
      showSuccess('Foi removido com sucesso');
    } catch (error) {
      showError('Ocorreu um erro na hora de remover o filme da lista');
    }
  };

  return <Like likes={movie.allLikMovies} removeMovieLike={removeMovieLike} />;
};
export default LikeContainer;
