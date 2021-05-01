import axios from "axios";
import { baseURL } from '../config/config';

const onSuccess = (response) => {
  return response.data; 
};

const onError = (error) => {
  console.error("Request Failed:", error.config);
  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else {
    console.error("Error message:", error.message);
  }
  return Promise.reject(error.response || error.message);
};

export const get = (url, params) => {
  return axios
    .get(baseURL + url, {params})
    .then(onSuccess)
    .catch(onError);
};

export const post = (url, data, headers) => {
  return axios
    .post(baseURL + url, data, headers)
    .then(onSuccess)
    .catch(onError);
};

export const put = (url, data, headers) => {
  return axios
    .put(baseURL + url, data, headers)
    .then(onSuccess)
    .catch(onError);
};

export const del = (url, data, headers) => {
  return axios
    .delete(baseURL + url, {data})
    .then(onSuccess)
    .catch(onError);
};