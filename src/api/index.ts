import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://api.tvmaze.com',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
