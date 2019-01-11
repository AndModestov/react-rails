import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addProduct } from "src/actions/Basket"

const actionsToProps = (dispatch) => (bindActionCreators({ addProduct }, dispatch));

class AddToBasketButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 1
    };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.onProductAdd = this.onProductAdd.bind(this);
  }

  onAmountChange(e) {
    this.setState({ amount: parseInt(e.target.value) })
  }

  onProductAdd() {
  let { amount } = this.state;
  let { addProduct, product } = this.props;

  addProduct({ ...product, amount })
}

  render() {
    const { product } = this.props;
    const { amount } = this.state;

    return (
      <div>
        <button onClick={this.onProductAdd}>
          Add to Basket
        </button>
        <input className="basket-button-input"
               type="number"
               defaultValue="1"
               onChange={this.onAmountChange} />
      </div>
    )
  }
}

export default connect(null, actionsToProps)(AddToBasketButton);
