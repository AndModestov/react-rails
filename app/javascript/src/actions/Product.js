import * as types from "src/constants/actionTypes/ProductsActionTypes";
import { productsApi } from "src/helpers/routes";

import { API_CALL } from "src/middleware/API";

export function fetchProduct(id) {
  return {
    [API_CALL]: {
      endpoint: productsApi(id),
      method: "GET",
      types: [
        types.FETCH_PRODUCT_REQUEST,
        types.FETCH_PRODUCT_SUCCESS,
        types.FETCH_PRODUCT_ERROR
      ]
    }
  }
}
