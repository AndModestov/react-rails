import React, { Component } from 'react';

import ProductCard from 'src/components/views/catalog/product-card';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;

    return (
      <div>
        {
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </div>
    )
  }
}

export default Catalog;
