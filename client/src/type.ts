
export type Coctail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  coctail: Coctail;
};

export type RecipeType = {
  [key: string]: string | null;
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  strInstructions: string;
};

export type PaginationButtonsProps = {
  coctails: Coctail[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  coctailsPerPage: number;
};

export type OneCoctailProps = {
  coctail: Coctail;
};

export type RecipeProps = {
  recipe: RecipeType;
  ingredients: string[];
  coctail: Coctail;
  handleClose: () => void;
};

export type ModalWindowProps = {
  coctail: Coctail;
  open: boolean;
  handleClose: () => void;
};

export type Ingredient = {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
 
}
