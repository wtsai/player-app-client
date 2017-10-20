import React, { Component } from 'react';
import Api from '../../lib/Api';
import Header from '../header/Header';
import Selector from '../share/Selector';
import Video from './Video';
import './VideoPage.css';
import 'react-select/dist/react-select.css';

const api = new Api();

function getVideo(id) {
  return api.getVideo(id).then(
    res => res
  );
}

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: {contents: []}, playing: false, playingVideo: {}, videos: []};
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      getVideo(this.props.match.params.id).then(
        res => {
          const channel = res.channel;
          const videos = channel.contents.map((video, index) => {
            return Object.assign({}, {value: video.youtube_id, label: video.name, labelKey: index});
          });

          this.setState({
            channel,
            playingVideo: {
              value: channel.contents[0].youtube_id,
              label: channel.contents[0].name,
              labelKey: 0,
            },
            videos,
          });
        }
      );
    }
  }

  handleChange(newValue) {
    this.setState({playing: false, playingVideo: newValue});
  }

  handleEnded() {
    const nextPlay = this.state.playingVideo.labelKey+1;

    if(nextPlay < this.state.videos.length) {
      this.setState({playing: true, playingVideo: this.state.videos[nextPlay]});
    } else {
      console.log('The end of this list.');
    }
  }

  render() {
    return (
      <div className="main-VideoPage page">
        <Header title={this.state.channel.name}/>
        <Selector
          value={this.state.playingVideo.value}
          options={this.state.videos}
          onChange={this.handleChange.bind(this)}
        />
        <Video
          videoId={this.state.playingVideo.value}
          onEnded={this.handleEnded.bind(this)}
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default VideoPage;
