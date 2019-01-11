import request from "superagent";
import humps from "humps";

import * as types from "src/constants/actionTypes/ProductsActionTypes";
import { productsApi } from "src/helpers/routes";

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = (products) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  entries: products
});

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_ERROR
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts());

    return request(productsApi())
      .then(({ body }) => {
        let products = humps.camelizeKeys(body.products);
        dispatch(receiveProducts(products));
      })
      .catch((error) => {
        dispatch(errorProducts());
      })
  }
}
