import BasketPage from "src/components/views/basket";
import { basketPath } from "src/helpers/routes"

export default {
  path: basketPath(),
  component: BasketPage,
  exact: true
}
