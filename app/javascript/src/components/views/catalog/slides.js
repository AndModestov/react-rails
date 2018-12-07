import React, { Component } from 'react';
import request from "superagent";
import humps from "humps";

import { imagesApi } from 'src/helpers/routes';

class Slides extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      activeImage: {},
      activeImageIndex: 0
    }

    this.changeActiveImage = this.changeActiveImage.bind(this);
  }

  componentDidMount() {
    request(imagesApi())
      .then(({ body }) => {
        const images = humps.camelizeKeys(body.images);
        const activeImage = images[0];
        const activeImageIndex = 0;
        this.setState({ images, activeImage, activeImageIndex });
        setInterval(() => this.changeActiveImage(), 3000);
      });
  }

  changeActiveImage() {
    let activeImageIndex = this.state.activeImageIndex + 1;
    let nextImage = this.state.images[activeImageIndex];
    if (!nextImage) { activeImageIndex = 0 };

    const activeImage = this.state.images[activeImageIndex];
    this.setState({ activeImageIndex, activeImage });
  }

  render() {
    const { activeImage } = this.state;

    return (
      <div className="slides">
        <h1>Best Seller</h1>
        <br />
        <img src={activeImage.url}
             alt="img"
             width="300"
             height="300"/>
      </div>
    )
  }
}

export default Slides;
