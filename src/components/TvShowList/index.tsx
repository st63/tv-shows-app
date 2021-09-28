import { FC } from 'react';

import { TvShowListHeader } from '../TvShowListHeader';
import { TvShowListBody } from '../TvShowListBody';
import { Pagination } from '../Pagination';
import { TvShowListBox, Table } from './styles';
import { useTvShowList } from '../../utils/hooks';

export const TvShowList: FC = () => {
  const {
    tvShow,
    pageNumbers,
    paginate,
    prevPage,
    nextPage,
    currentPage,
    pageCount,
  } = useTvShowList();

  return (
    <TvShowListBox>
      <Table>
        <TvShowListHeader />
        <TvShowListBody tvShow={tvShow} />
      </Table>
      <Pagination
        pageCount={pageCount}
        pageNumbers={pageNumbers}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </TvShowListBox>
  );
};
