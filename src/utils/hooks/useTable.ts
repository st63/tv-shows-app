import { useState, useEffect } from 'react';

import { getTVShows } from '../../api';
import { TvShowFormattedType } from '../../types';

export const useTable = () => {
  const [tvShow, setTvShows] = useState<TvShowFormattedType[] | []>([]);

  useEffect(() => {
    getTVShows().then((tvShows) => setTvShows(tvShows));
  }, []);

  return {
    tvShow,
  };
};
