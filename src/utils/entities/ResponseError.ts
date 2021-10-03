/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { AxiosError } from 'axios';

export default class ResponseError {
  message: string;

  code: number;

  constructor({ response, isAxiosError }: AxiosError) {
    const message =
      response?.status === 401
        ? 'Sua sessão expirou. Por favor faça o login de novo.'
        : response?.data?.message
        ? `${response?.data?.message}\n \n${
            response?.config ? response?.config.headers?.['x-tid'] : ''
          }`
        : 'Ocorreu um erro tente novamente';

    this.message = isAxiosError ? message : '';
    this.code = response?.status || 0;
  }
}
