import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import BasketContext from 'src/contexts/basket-context';
import { basketPath } from "src/helpers/routes";

class BasketButton extends Component {
  constructor(props) {
    super(props);

    this.onDragOver = this.onDragOver.bind(this);
  }

  onDragDrop(e, addToBasket) {
    const product = JSON.parse(e.dataTransfer.getData("product"));
    addToBasket(product);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    return (
      <BasketContext.Consumer>
      {
        ({ productsInBasket, addToBasket }) => {
          return (
            <div onDragOver={this.onDragOver}
                 onDrop={(e) => this.onDragDrop(e, addToBasket)}>
              <NavLink activeClassName="active" to={basketPath()}>
                <h4> Basket ({productsInBasket.length})</h4>
              </NavLink>
            </div>
          )
        }
      }
      </BasketContext.Consumer>
    )
  }
}

export default BasketButton;
