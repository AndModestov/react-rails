import React, { Component } from "react";

class GalleryImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageUrl = this.props.src;
    const { changeActiveImage } = this.props;

    return (
      <div className="gallery-image"
           onClick={() => changeActiveImage(imageUrl)}>
        <img src={imageUrl}
             alt="image"
             width="80"
             height="80"/>
      </div>
    )
  }
}

export default GalleryImage;
