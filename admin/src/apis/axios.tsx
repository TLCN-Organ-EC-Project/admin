import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://gin-ec-clothing.onrender.com/api',
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  let localStorageData = window.localStorage.getItem('persist:user');
  if (localStorageData && typeof localStorageData === 'string') {
    const parsedData = JSON.parse(localStorageData);
    if (parsedData && typeof parsedData === 'object' && 'token' in parsedData) {
      const accessToken = JSON.parse(parsedData.token);
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
});

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return error?.response?.data;
  }
);

export default instance;