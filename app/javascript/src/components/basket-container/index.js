import React, { Component } from 'react';

import BasketContext from 'src/contexts/basket-context';

class BasketContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInBasket: []
    };

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(product, amount = 1) {
    const productsInBasket = this.state.productsInBasket;
    productsInBasket.push({ ...product, amount });
    this.setState({ productsInBasket });
  }

  render() {
    return (
      <BasketContext.Provider value={{
        productsInBasket: this.state.productsInBasket,
        addToBasket: this.addToBasket
      }}>
        {this.props.children}
      </BasketContext.Provider>
    )
  }
}

export default BasketContainer;
