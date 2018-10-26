import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  alert("This feature is under construction");
  }

  render() {
    const { title, category, image, color, price } = this.props.product;
    return (
      <div
        className="product-index-item"
        onClick={this.handleClick}
      >
        <p>Image: </p>
        <img className="index-item-image" src={image} />
        <div className="index-item-info">
          <span className="index-item-title">Title:{title}</span>
          <span className="index-item-category">Category:{category}</span>
          <span className="index-item-color">Color:</span>
          <span className="index-item-price">Price:</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
