import React, { Component } from 'react';
import Select from 'react-select';
import Api from '../../lib/Api';
import Header from '../header/Header';
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
    this.state = {channel: {contents: []}, playingVideo: '', videos: []};
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      getVideo(this.props.match.params.id).then(
        res => {
          const channel = res.channel;
          const videos = channel.contents.map(video => {
            return Object.assign({}, {value: video.youtube_id, label: video.name});
          });

          this.setState({channel, playingVideo: channel.contents[0].youtube_id, videos});
        }
      );
    }
  }

  handleChange(newValue) {
    this.setState({playingVideo: newValue.value});
  }

  render() {
    return (
      <div className="main-VideoPage page">
        <Header title={this.state.channel.name}/>
        <Video
          videoId={this.state.playingVideo}
        />
        <Select
          value={this.state.playingVideo}
          options={this.state.videos}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default VideoPage;
