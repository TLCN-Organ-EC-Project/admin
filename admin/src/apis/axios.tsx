import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface LocalStorageData {
  token: string;
}

const instance = axios.create({
  baseURL: 'https://gin-ec-clothing.onrender.com/api',
  timeout: 2000,
});

instance.interceptors.request.use(function (config: AxiosRequestConfig)
 {
    config.headers = config.headers || {}; 
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    let localStorageData = window.localStorage.getItem('persist:shop/user');
    if (localStorageData && typeof localStorageData === 'string') {
      const parsedData = JSON.parse(localStorageData) as LocalStorageData;
      const accessToken = parsedData.token;
      config.headers = { authorization: `Bearer ${accessToken}` };
      return config;
    } else return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return error?.response?.data;
  }
);

export default instance;
