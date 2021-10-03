import React, { FC } from 'react';

import { NavigationActions, Routes } from '~/navigation';
import { useShop } from '~/stores';
import { useAlerts } from '~/utils';

import Shopping from './Shopping';

export const ShoppingContainer: FC = () => {
  const shop = useShop();
  const { showError, showSuccess } = useAlerts();
  const removeMovie = (id: number) => {
    try {
      shop.removeMovieBuy(id);
      showSuccess('Foi removido com sucesso');
    } catch (error) {
      showError('Ocorreu um erro na hora de remover o filem da lista');
    }
  };
  console.tron.log(shop.buyMovie);
  return <Shopping shop={shop.buyMovie} removeMovie={removeMovie} />;
};
export default ShoppingContainer;
