import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Api from '../Api';
import Video from './Video'

const api = new Api();
const options = {
    items: 1,
    nav: false,
    rewind: true,
    loop: true,
};

function getVideo(id) {
  return api.getVideo(id).then(
    res => res
  );
}

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: {contents: []}};
  }

  componentWillMount() {
    if (this.props.id) {
      getVideo(this.props.id).then(
        res => {
          this.setState({channel: res.channel});
        }
      );
    }
  }

  render() {
    return (
      <OwlCarousel options={options}>
        {
          this.state.channel.contents.map((channel) => (
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
