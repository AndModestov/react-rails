import React from "react";
import ProductPage from "src/components/views/product";
import { productPath } from "src/helpers/routes"
import { fetchProduct } from "src/actions/Product";

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductPage productId={match.params.id}/>
  ),
  prepareData: (store, params) => {
    store.dispatch(fetchProduct(params.id));
  }
}
