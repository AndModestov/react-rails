import React, { Component } from "react";

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <h3>{this.props.text}</h3>
      </span>
    )
  }
}

export default TextBox;
