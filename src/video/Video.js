import React, { Component } from 'react';
import Plyr from 'react-plyr';
import 'plyr/dist/plyr.css';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = props || {};
  }

  render() {
    return (
      <div className="video">
        <Plyr
          type={this.state.type}
          videoId={this.state.videoId}
        />
      </div>
    );
  }
}

export default Video;
