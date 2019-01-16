import CatalogPage from "src/components/views/catalog";
import { catalogPath } from "src/helpers/routes"

import { fetchProducts } from "src/actions/Products";

export default {
  path: catalogPath(),
  component: CatalogPage,
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
  }
}
