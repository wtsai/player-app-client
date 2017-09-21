import React, { Component } from 'react';

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = props || [];
  }

  render() {
    return (
      <div>
        <img
          src={this.state.src}
          alt={this.state.alt}
          onClick={this.state.onClick.bind()}
        />
      </div>
    );
  }
}

export default Channel;
