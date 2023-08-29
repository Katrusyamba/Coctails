import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import type { PaginationButtonsProps } from './type';

function PaginationButtons({ coctails, currentPage, setCurrentPage, coctailsPerPage }: PaginationButtonsProps): JSX.Element {
 
  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number): void => {
    setCurrentPage(page);
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <Pagination
        count={Math.ceil(coctails.length / coctailsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}

export default PaginationButtons;
