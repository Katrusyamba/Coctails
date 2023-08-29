import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Grid } from '@mui/material';
import OneCoctail from './OneCoctail';
import type { Coctail } from './type';
import PaginationButtons from './PaginationButtons';

function App(): JSX.Element {
  const [coctails, setCoctails] = useState<Coctail[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coctailsPerPage = 18;

  useEffect(() => {
    axios
      .get<{ drinks: Coctail[] }>(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
      )
      .then(({ data }) => setCoctails(data.drinks))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indexOfLastCoctail = currentPage * coctailsPerPage;
  const indexOfFirstCoctail = indexOfLastCoctail - coctailsPerPage;
  const currentCoctails = coctails.slice(indexOfFirstCoctail, indexOfLastCoctail);

  return (
    <>

      <div className="container">
        <Grid container spacing={2}>
          {currentCoctails.map((coctail) => (
            <Grid item xs={12} sm={6} md={4} key={coctail.idDrink}>
              <Card
                sx={{
                  width: 500,
                  height: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <OneCoctail coctail={coctail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <PaginationButtons
        coctails={coctails}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        coctailsPerPage={coctailsPerPage}
      />
    </>
  );
}

export default App;
