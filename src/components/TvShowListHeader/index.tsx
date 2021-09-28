import { FC } from 'react';

import { TableHead } from './styles';

export const TvShowListHeader: FC = () => (
  <TableHead>
    <tr>
      <td>Обложка</td>
      <td>Название</td>
      <td>Жанр</td>
      <td>Страна</td>
      <td>Длительность</td>
      <td>Рейтинг</td>
    </tr>
  </TableHead>
);
