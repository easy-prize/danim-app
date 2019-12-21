import Axios, { AxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  validateStatus: () => true,
});

axios.interceptors.request.use((config: AxiosRequestConfig)  => {
  // const token = AsyncStorage.getItem('YEE_GUN_BIMIL_YEE_YA');
  config.headers.Authorization = /* token */ 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlkeCI6IjVkZmUwOWRkYzhhYmJhMWEzN2EyOGQ1YiIsImlhdCI6MTU3Njk0MzI4M30.kLh79jTL2UH8vaCXcLh30dUmC3QSKBOk-p_BtVa89BM';
  return config;
});

export default axios;
