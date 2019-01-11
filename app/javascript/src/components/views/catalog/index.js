import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Catalog from "src/components/views/catalog/catalog";
import Slides from "src/components/views/catalog/slides";
import { productsApi } from "src/helpers/routes";

import { fetchProducts } from "src/actions/Products"

const actionsToProps = (dispatch) => (bindActionCreators({ fetchProducts }, dispatch));

const stateToProps = (state) => ({
  products: state.products.entries,
  isFetching: state.products.isFetching
});

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
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

export default connect(stateToProps, actionsToProps)(CatalogPage);
