import React, { Component } from "react";

import { connect } from "react-redux";

const stateToProps = (state) => ({
  products: state.basket.products
});

class BasketPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h2>Goods In Basket:</h2>
        <h3>
          <ul>
            {
              products.map((prod, key) => (
                <li key={key}>{prod.name} - {prod.price}$ ({prod.amount})</li>
              ))
            }
          </ul>
        </h3>
      </div>
    )
  }
}

export default connect(stateToProps, null)(BasketPage);
