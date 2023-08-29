import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { RecipeProps } from './type';

function Recipe({ recipe, ingredients, coctail, handleClose }: RecipeProps): JSX.Element {

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        title={coctail.strDrink}
        action={
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      />

      <CardMedia
        component="img"
        height="100%"
        width="100"
        image={coctail.strDrinkThumb}
        alt="Paella dish"
        style={{ objectFit: 'cover' }}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe.strInstructions}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div><h1>Ingridients:</h1></div>
        </Typography>
        {ingredients.map((el) => (
          <Typography  key={el} variant="body2" color="text.secondary">
            {el}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default Recipe;
