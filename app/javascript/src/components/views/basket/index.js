import React, { Component } from "react";

import BasketContext from 'src/contexts/basket-context';

class BasketPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasketContext.Consumer>
      {
        ({ productsInBasket }) => {
          return (
            <div>
              <h2>Goods In Basket:</h2>
              <h3>
                <ul>
                  {
                    productsInBasket.map((prod, key) => (
                      <li key={key}>{prod.name} - {prod.price}$ ({prod.amount})</li>
                    ))
                  }
                </ul>
              </h3>
            </div>
          )
        }
      }
      </BasketContext.Consumer>
    )
  }
}

export default BasketPage;
