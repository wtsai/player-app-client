import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import windowSize from 'react-window-size';

class Video extends Component {
  render() {
    return (
      <div >
        <ReactPlayer
          width={this.props.windowWidth}
          height={this.props.windowHeight}
          className="video"
          url={`https://www.youtube.com/watch?v=${this.props.videoId}`}
          onEnded={this.props.onEnded || undefined}
          playing={this.props.playing || false }
        />
      </div>
    );
  }
}

export default windowSize(Video);
