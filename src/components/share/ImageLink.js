import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ImageLink extends Component {
  constructor(props) {
    super(props);
    this.state = props || [];
  }

  render() {
    return (
      <div>
        <Link to={this.state.path}>
          <img
            src={this.state.src}
            alt={this.state.alt}
            className={this.state.className || ''}
          />
        </Link>
      </div>
    );
  }
}

export default ImageLink;
