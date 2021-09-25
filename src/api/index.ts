import axios from 'axios';

import { TvShowInitialType, TvShowFormattedType } from '../types';

const mapTvShows = (tvShow: TvShowInitialType) => {
  const {
    id, image, genres, name, rating, weight, network,
  } = tvShow;

  return {
    id,
    cover: image.original,
    genres,
    name,
    rating: rating.average,
    duration: weight,
    country: network?.country?.name,
  };
};

export const getTVShows = async (): Promise<TvShowFormattedType[]> => {
  const { data } = await axios.get('http://api.tvmaze.com/shows?page=1');

  return data.map(mapTvShows);
};
