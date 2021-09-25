import { FC } from 'react';

import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import { TvShowFormattedType } from '../../types';
import { useTable } from '../../utils/hooks';

export const Table: FC = () => {
  const { tvShow } = useTable();

  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {tvShow.map((tvShowParams: TvShowFormattedType) => <TableRow key={tvShowParams.id} {...tvShowParams} />)}
      </tbody>
    </table>
  );
};
