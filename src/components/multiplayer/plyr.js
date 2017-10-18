import React, { Component } from 'react';
import Plyr from 'react-plyr';
import 'plyr/dist/plyr.css';

class PlyrPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = props || {};
  }

  render() {
    return (
      <div className="videolist">
        <Plyr
          key={this.state.key}
          type={this.state.type}
          videoId={this.state.videoId}
        />
      </div>
    );
  }
}

export default PlyrPlayer;
