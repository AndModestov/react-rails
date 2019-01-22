import React, { Component } from "react";

import { connect } from "react-redux";

import AddToBasketButton from "src/components/views/catalog/add-to-basket-button";
import Gallery from "./gallery";

const stateToProps = (state) => ({
  product: state.product.entries,
  isFetching: state.product.isFetching
});

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    const { productId } = this.props;

    return (
      <div>
        <h2>{product.name} <i>({product.price}$)</i></h2>
        <Gallery productId={productId} />
        <AddToBasketButton product={product} />
      </div>
    )
  }
}

export default connect(stateToProps)(ProductPage);
