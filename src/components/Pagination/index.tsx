import { FC } from 'react';
import { Button, Grid } from '@material-ui/core';

import { PaginationContainer, PrevNextButtons, NumbersButtons } from './styles';

type PaginationPropsType = {
  pageCount: number;
  pageNumbers: number[] | [];
  paginate: (currentPage: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  currentPage: number;
};

export const Pagination: FC<PaginationPropsType> = ({
  pageCount,
  pageNumbers,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => (
  <PaginationContainer>
    <NumbersButtons container spacing={2}>
      {pageNumbers.map((number) => (
        <Grid item>
          <Button
            key={number}
            onClick={() => paginate(number)}
            variant={currentPage === number ? 'contained' : 'outlined'}
          >
            {number}
          </Button>
        </Grid>
      ))}
    </NumbersButtons>
    <PrevNextButtons container spacing={2}>
      <Grid item>
        <Button
          disabled={currentPage === 1 && true}
          onClick={prevPage}
          variant="contained"
        >
          PrevPage
        </Button>
      </Grid>
      <Grid item>
        <Button
          disabled={currentPage === pageCount && true}
          onClick={nextPage}
          variant="contained"
        >
          NextPage
        </Button>
      </Grid>
    </PrevNextButtons>
  </PaginationContainer>
);
