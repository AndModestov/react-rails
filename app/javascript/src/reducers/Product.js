import { assign } from "lodash/object";

import * as types from "src/constants/actionTypes/ProductsActionTypes";

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_PRODUCT_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_PRODUCT_SUCCESS:
      return assign({}, state, { entries: action.data.product });
    default:
      return state;
  }
}
