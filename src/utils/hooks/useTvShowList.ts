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

  const paginate = useCallback(
    (currentPage: number) => setCurrentPage(currentPage),
    [currentPage],
  );

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
      } catch (Error) {
        console.error(Error);
      }
    })();
  }, []);

  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

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
