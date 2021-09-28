import { FC } from 'react';

import { TvShow } from '../TvShow';

export const TvShowListBody: FC<{tvShow: TvShowFormattedType[]}> = ({ tvShow }) => (
  <tbody>
    {tvShow.map((tvShowParams: TvShowFormattedType) => (
      <TvShow key={tvShowParams.id} {...tvShowParams} />
    ))}
  </tbody>
);
