import React, { Component } from 'react';

class MainImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src } = this.props;

    return (
      <div className="main-image">
        <img src={src}
             alt="img"
             width="400"
             height="400"/>
      </div>
    )
  }
}

export default MainImage;
