import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ImageLink extends Component {
  constructor(props) {
    super(props);
    this.state = props || [];
  }

  render() {
    return (
      <Link to={this.state.path}>
        <span className="Imagelist">
          <img
            src={this.state.src}
            alt={this.state.alt}
            title={this.state.title}
            className={this.state.className || ''}
          />
        </span>
      </Link>
    );
  }
}

export default ImageLink;
