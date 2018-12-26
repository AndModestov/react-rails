import React, { Component } from 'react';
import request from "superagent";
import humps from "humps";

import Catalog from 'src/components/views/catalog/catalog';
import Slides from 'src/components/views/catalog/slides';
import { productsApi } from 'src/helpers/routes';

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    request(productsApi())
      .then(({ body }) => {
        const products = humps.camelizeKeys(body.products);
        this.setState({ products });
      })
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <Slides />
        <Catalog products={products} />
      </div>
    )
  }
}

export default CatalogPage;
