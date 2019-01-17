import { createStore, applyMiddleware } from "redux";

import APIMiddleware from "src/middleware/API";
import BasketLocalStorage from "src/middleware/BasketLocalStorage";

import reducers from "src/reducers";

const store = createStore(
  reducers,
  applyMiddleware(APIMiddleware, BasketLocalStorage)
);

export default store;
