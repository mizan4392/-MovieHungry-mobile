import axios from 'axios';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=a3cc815d2c0cc828dab0f4e52d8eb0a7';
export const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
export const get = (url: string) => {
  return axios.get(`${API_BASE}/${url}?${API_KEY}`);
};
