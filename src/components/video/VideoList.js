// deprecated
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Video from './Video';

const options = {
    items: 1,
    nav: false,
    rewind: true,
    loop: true,
};

class VideoList extends Component {
  render() {
    return (
      <OwlCarousel options={options}>
        {
          this.props.channel.contents.map((channel) => (
            <Video
              key={channel._id}
              type={channel.type}
              videoId={channel.youtube_id}
            />
          ))
        }
      </OwlCarousel>
    );
  }
}

export default VideoList;
