import axios from 'axios';

const { REACT_APP_API } = process.env;

const client = axios.create({
  baseURL: REACT_APP_API,
});

client.interceptors.response.use(
  (response) => response.data,
  (response) => {
    let error = response.message;

    if (response.response.data?.message) {
      error = response.response.data.message;
    }

    if (response.response.data?.error?.message) {
      error = response.response.data.error.message;
    }

    return Promise.reject(error);
  },
);

export default client;
