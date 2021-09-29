import { useState, useEffect, useCallback } from 'react';

import { getTVShow } from '../../api';
import { TV_SHOWS_PER_PAGE } from '../../constants';

export const useTvShowList = () => {
  const [tvShow, setTvShows] = useState<TvShowFormattedType[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndexOnCurrentPage: number = currentPage * TV_SHOWS_PER_PAGE;
  const firstIndexOnCurrentPage: number = lastIndexOnCurrentPage - TV_SHOWS_PER_PAGE;
  const tvShowOnCurrentPage: TvShowFormattedType[] | [] = tvShow.slice(
    firstIndexOnCurrentPage,
    lastIndexOnCurrentPage,
  );
  const pageCount: number = Math.ceil(tvShow.length / TV_SHOWS_PER_PAGE);

  const paginate = (currentPage: number) => setCurrentPage(currentPage);

  const nextPage = useCallback(
    () => setCurrentPage((currentPage) => currentPage + 1),
    [currentPage],
  );

  const prevPage = useCallback(
    () => setCurrentPage((currentPage) => currentPage - 1),
    [currentPage],
  );

  useEffect(() => {
    (async () => {
      try {
        const tvShow = await getTVShow();
        setTvShows(tvShow);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const pageNumbers = Array.from({ length: pageCount }, (v, k) => k + 1);

  return {
    tvShow: tvShowOnCurrentPage,
    pageNumbers,
    paginate,
    nextPage,
    prevPage,
    currentPage,
    pageCount,
  };
};
