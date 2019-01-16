import { combineReducers } from "redux";

import products from "./Products";
import basket from "./Basket";

export default combineReducers({
  products,
  basket
});
