import React, { Component } from 'react';

import BasketContext from 'src/contexts/basket-context';

class AddToBasketButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 1
    };

    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onAmountChange(e) {
    this.setState({ amount: parseInt(e.target.value) })
  }

  render() {
    const { product } = this.props;
    const { amount } = this.state;

    return (
      <BasketContext.Consumer>
        {
          ({ addToBasket }) => (
            <div>
              <button onClick={() => addToBasket(product, amount)}>
                Add to Basket
              </button>
              <input type="number"
                     defaultValue="1"
                     onChange={this.onAmountChange} />
            </div>
          )
        }
      </BasketContext.Consumer>
    )
  }
}

export default AddToBasketButton;
