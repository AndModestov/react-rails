import React, { Component } from "react";

import { connect } from "react-redux";

import Catalog from "src/components/views/catalog/catalog";
import Slides from "src/components/views/catalog/slides";

const stateToProps = (state) => ({
  products: state.products.entries,
  isFetching: state.products.isFetching
});

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <Slides />
        <Catalog products={products} />
      </div>
    )
  }
}

export default connect(stateToProps)(CatalogPage);
