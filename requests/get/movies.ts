import {get} from '../../utils/http';

export const getPopularMovies = () => {
  return get('movie/popular')
    .then(res => res.data)
    .catch(err => err);
};

export const getUpcomingMovies = () => {
  return get('movie/upcoming')
    .then(res => res.data)
    .catch(err => err);
};

export const getPopularTv = () => {
  return get('tv/popular')
    .then(res => res.data)
    .catch(err => err);
};

export const getUpcomingTv = () => {
  return get('tv/upcoming')
    .then(res => res.data)
    .catch(err => err);
};
