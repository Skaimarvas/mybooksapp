import axios from 'axios';
import {UserPostType} from '../../interfaces/user';

axios.interceptors.request.use(
  request => {
    const fullUrl = `${axios.defaults.baseURL}${request.url}`;
    console.log('Request:', {
      url: fullUrl,
      method: request.method,
      headers: request.headers,
      data: request.data,
    });
    return request;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

export const createUserRequest = (user: UserPostType) => {
  console.log('baseUrl', axios.defaults.baseURL);
  console.log('user', user);
  return axios
    .post(`/user`, user)
    .then(res => console.log('then section', res))
    .catch(error => console.log('error section', error.data));
};
