import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const mapTvShow = (tvShow: TvShowInitialType): TvShowFormattedType => {
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

export const getTVShow = async (): Promise<TvShowFormattedType[]> => {
  const { data } = await request.get<TvShowInitialType[]>('shows?page=1');

  return data.map(mapTvShow);
};
