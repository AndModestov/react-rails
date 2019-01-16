import * as types from "src/constants/actionTypes/BasketActionTypes"

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    product
  }
}
