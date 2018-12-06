import React, { Component } from "react";

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;

    return (
      <h2>
        <span>Product ID: {id}</span>
      </h2>
    )
  }
}

export default ProductPage;
