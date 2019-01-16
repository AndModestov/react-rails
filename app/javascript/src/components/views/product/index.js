import React, { Component } from "react";
import request from "superagent";
import humps from "humps";

import { productsApi } from "src/helpers/routes";
import AddToBasketButton from "src/components/views/catalog/add-to-basket-button";
import Gallery from "./gallery";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    const { id } = this.props;

    request(productsApi(id))
      .then(({ body }) => {
        const product = humps.camelizeKeys(body.product);
        this.setState({ product });
      })
  }

  render() {
    const { product } = this.state;
    const productId = this.props.id;

    return (
      <div>
        <h2>{product.name} <i>({product.price}$)</i></h2>
        <Gallery productId={productId} />
        <AddToBasketButton product={product} />
      </div>
    )
  }
}

export default ProductPage;
