import React from 'react';
import { Typography, Modal, Box } from '@mui/material';

function ModalWindow() {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <Typography variant="h4">{coctail.strDrink}</Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalWindow;
