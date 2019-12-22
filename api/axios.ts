import Axios, { AxiosRequestConfig } from 'axios';

import { AsyncStorage } from 'react-native';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  validateStatus: () => true,
});

axios.interceptors.request.use((config: AxiosRequestConfig)  => {
  const token = AsyncStorage.getItem('YEE_GUN_BIMIL_YEE_YA');
  config.headers.Authorization = token;
  return config;
});

export default axios;
