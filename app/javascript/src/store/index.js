import { createStore, applyMiddleware } from "redux";

import APIMiddleware from "src/middleware/API";

import reducers from "src/reducers";

const store = createStore(reducers, applyMiddleware(APIMiddleware));

export default store;
