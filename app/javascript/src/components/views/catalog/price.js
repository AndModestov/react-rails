import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <h3>{this.props.price}$</h3>
      </span>
    )
  }
}

export default Price;
