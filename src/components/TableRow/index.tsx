import { FC } from 'react';

import { TvShowFormattedType } from '../../types';

export const TableRow: FC<TvShowFormattedType> = ({
  cover,
  name,
  rating,
  duration,
  genres,
  country,
}) => (
  <tr>
    <td>
      <img
        width="30px"
        alt="Обложка шоу"
        src={cover}
      />
    </td>
    <td>{name}</td>
    <td>{genres.length ? genres.map((genre: string) => <p>{genre}</p>) : '---'}</td>
    <td>{country || '---'}</td>
    <td>{`${duration} минут`}</td>
    <td>{rating || '---'}</td>
  </tr>
);
