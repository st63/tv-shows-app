import { FC } from 'react';

import { Cover } from './styles';

export const TvShow: FC<TvShowFormattedType> = ({
  cover,
  name,
  rating,
  duration,
  genres,
  country,
}) => (
  <tr>
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
  </tr>
);
