import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import windowSize from 'react-window-size';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = props || {};
  }

  render() {
    return (
      <div >
        <ReactPlayer
          width={this.props.windowWidth}
          height={this.props.windowHeight}
          className="video"
          url={`https://www.youtube.com/watch?v=${this.state.videoId}`}
        />
      </div>
    );
  }
}

export default windowSize(Video);
