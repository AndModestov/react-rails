import React, { Component } from "react";
import request from "superagent";
import humps from "humps";

import { productImagesApi } from 'src/helpers/routes';
import GalleryImage from './gallery-image';
import MainImage from './main-image';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      activeImageUrl: ''
    }

    this.changeActiveImage = this.changeActiveImage.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;

    request(productImagesApi(productId))
      .then(({ body }) => {
        const images = humps.camelizeKeys(body.images);
        const activeImageUrl = images[0].url;
        this.setState({ images, activeImageUrl });
      })
  }

  changeActiveImage(url) {
    this.setState({ activeImageUrl: url });
  }

  render() {
    const { images } = this.state;
    const { activeImageUrl } = this.state;

    return (
      <div>
        <MainImage src={activeImageUrl} />
        {
          images.map((img, key) => (
            <GalleryImage src={img.url}
                          changeActiveImage={this.changeActiveImage}
                          key={key} />
          ))
        }
      </div>
    )
  }
}

export default Gallery;
