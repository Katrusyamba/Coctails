import React, { useState } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import type {OneCoctailProps } from './type';
import ModalWindow from './ModalWindow';



export default function OneCoctail({ coctail }: OneCoctailProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () : void=> {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box className="container-element">
      <CardMedia
        component="img"
        src={coctail.strDrinkThumb}
        alt="logo"
        sx={{ width: 250, height: 250, marginTop: '30px', cursor: 'pointer' }}
        onClick={handleOpen}
      />
      <Typography variant="h6" className="name" sx={{ marginTop: '40px', marginBottom: '20px' }}>
        {coctail.strDrink}
      </Typography>
     <ModalWindow  coctail={coctail} open={open} handleClose={handleClose}/>
    </Box>
  );
}
