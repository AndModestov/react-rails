import React, { Component } from "react";
import request from "superagent";
import humps from "humps";

import { productsApi } from 'src/helpers/routes';
import ProductCard from 'src/components/views/catalog/product-card';

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

    return (
      <div>
        <h2>Product:</h2>
        <ProductCard product={product} />
      </div>
    )
  }
}

export default ProductPage;
