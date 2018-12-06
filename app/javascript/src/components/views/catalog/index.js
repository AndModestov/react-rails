import React, { Component } from 'react';

import Catalog from 'src/components/views/catalog/catalog';
import { PRODUCTS } from 'src/constants/products';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Catalog products={PRODUCTS} />
    )
  }
}

export default CatalogPage;
