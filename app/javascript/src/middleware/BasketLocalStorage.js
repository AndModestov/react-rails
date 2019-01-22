import { ADD_PRODUCT } from "src/constants/actionTypes/BasketActionTypes";

import { saveBasket } from "src/helpers/basket";

const BasketLocalStorage = store => next => action => {
  next(action);
  if (action.type !== ADD_PRODUCT) return;

  const basket = store.getState().basket;
  saveBasket(basket);
};

export default BasketLocalStorage;
