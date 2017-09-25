import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = props || [];
  }

  render() {
    return (
      <div className="item">
        <Link to={this.state.path}>
          <img
            src={this.state.src}
            alt={this.state.alt}
          />
        </Link>
      </div>
    );
  }
}

export default Channel;
