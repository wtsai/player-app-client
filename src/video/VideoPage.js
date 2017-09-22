import React, { Component } from 'react';
import VideoList from './VideoList';
import './VideoPage.css';
import 'plyr/dist/plyr.css';

class VideoPage extends Component {
  render() {
    return (
      <div className="main-VideoPage page">
        <VideoList id={this.props.location.id}/>
      </div>
    );
  }
}

export default VideoPage;
