import * as types from "src/constants/actionTypes/BasketActionTypes"

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    product
  }
}

export function getLocalStorageData() {
  return {
    type: types.GET_LOCAL_STORAGE_DATA
  };
}
