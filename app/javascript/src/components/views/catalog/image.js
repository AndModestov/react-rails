import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        <img src={this.props.src}
             alt={this.props.alt}
             width={this.props.width}
             height={this.props.height}/>
      </p>
    )
  }
}

export default Image;
