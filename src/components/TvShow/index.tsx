import { FC } from 'react';

import { Cover, TableRow } from './styles';

export const TvShow: FC<TvShowFormattedType> = ({
  id,
  cover,
  name,
  rating,
  duration,
  genres,
  country,
}) => (
  <TableRow isEven={!(id % 2)}>
    <td>
      <Cover
        alt="Cover"
        src={cover}
      />
    </td>
    <td>{name}</td>
    <td>{genres.length ? genres.map((genre: string) => genre) : '---'}</td>
    <td>{country || '---'}</td>
    <td>{`${duration} минут`}</td>
    <td>{rating || '---'}</td>
  </TableRow>
);
