import axios from 'axios';

const mapTvShow = (tvShow: TvShowInitialType) => {
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
  const { data } = await axios.get('http://api.tvmaze.com/shows?page=1');

  return data.map(mapTvShow);
};
