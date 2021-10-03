import axios from 'axios';
import Config from 'react-native-config';
import { BASE_URL } from '~/utils';

const baseURL: string = BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 20000, // 20 seconds timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  console.tron.log({ Config });
  config.params = {
    ...config.params,
    language: 'pt-BR',
    api_key: Config.API_KEY,
  };
  return config;
});

export default api;
