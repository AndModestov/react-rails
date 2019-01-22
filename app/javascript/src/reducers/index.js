import { combineReducers } from "redux";

import products from "./Products";
import product from "./Product";
import basket from "./Basket";

export default combineReducers({
  products,
  product,
  basket
});
