import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Box, Fade } from '@mui/material';
import type { RecipeType, ModalWindowProps} from './type';
import Recipe from './Recipe';


function ModalWindow({ coctail, open, handleClose }: ModalWindowProps): JSX.Element {
  const [recipe, setRecipe] = useState<RecipeType>({strDrink: '',
    strDrinkThumb: '',
    idDrink: '',
    strInstructions:'',
  });

  useEffect(() => {
    axios
      .get<{drinks: RecipeType[]}>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctail.idDrink}`)
      .then(({data}) => {
        setRecipe(data.drinks[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coctail.idDrink]);

  const ingredients: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient: string | null= recipe[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <Recipe
            recipe={recipe}
            ingredients={ingredients}
            coctail={coctail}
            handleClose={handleClose}
          />
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalWindow;
