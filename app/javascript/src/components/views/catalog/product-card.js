import React, { Component } from 'react';

import Image from './image';
import Price from './price';
import TextBox from './text-box';
import AddToBasketButton from './add-to-basket-button';
import { Link } from "react-router-dom";
import { productPath } from "src/helpers/routes";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
  }

  onDragStart(e) {
    const product = this.props.product;
    e.dataTransfer.setData("product",  JSON.stringify(product));
  }

  render() {
    const product = this.props.product;

    return (
      <div onDragStart={this.onDragStart}
           className="product-card"
           draggable>
        <Link to={productPath(product.id)}>
          <Image src={product.imageUrl}
                 alt={product.name}
                 width="200"
                 height="200" />
        </Link>
        <TextBox text={product.name} />
        <Price price={product.price} />
        <AddToBasketButton product={product} />
      </div>
    )
  }
}

export default ProductCard;
