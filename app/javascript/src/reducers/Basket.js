import { assign } from "lodash/object";

import * as types from "src/constants/actionTypes/BasketActionTypes";

import { getBasket } from "src/helpers/basket";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  let products;

  switch (action.type) {
    case types.ADD_PRODUCT:
      products = state.products.slice(0);
      products.push(action.product);
      return assign({}, state, { products });
    case types.GET_LOCAL_STORAGE_DATA:
      return Object.assign({}, state, getBasket());
    default:
      return state;
  }
}
