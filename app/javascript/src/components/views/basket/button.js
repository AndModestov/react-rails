import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addProduct } from "src/actions/Basket";
import { basketPath } from "src/helpers/routes";

const actionsToProps = (dispatch) => (bindActionCreators({ addProduct }, dispatch));

const stateToProps = (state) => ({
  products: state.basket.products
});

class BasketButton extends Component {
  constructor(props) {
    super(props);

    this.onDragOver = this.onDragOver.bind(this);
  }

  onDragDrop(e) {
    const product = JSON.parse(e.dataTransfer.getData("product"));
    this.props.addProduct({ ...product, amount: 1 });
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    let { products } = this.props;

    return (
      <div className="basket-button"
           onDragOver={this.onDragOver}
           onDrop={(e) => this.onDragDrop(e)}>
        <NavLink activeClassName="active" to={basketPath()}>
          Basket ({products.length})
        </NavLink>
      </div>
    )
  }
}

export default connect(stateToProps, actionsToProps)(BasketButton);
