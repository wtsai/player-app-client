import React, { Component } from 'react';
import Api from '../../lib/Api';
import Header from '../header/Header';
import VideoList from './VideoList';
import './VideoPage.css';
import 'plyr/dist/plyr.css';

const api = new Api();

function getVideo(id) {
  return api.getVideo(id).then(
    res => res
  );
}

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: {contents: []}};
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      getVideo(this.props.match.params.id).then(
        res => {
          this.setState({channel: res.channel});
        }
      );
    }
  }

  render() {
    return (
      <div className="main-VideoPage page">
        <Header title={this.state.channel.name}/>
        <VideoList channel={this.state.channel}/>
      </div>
    );
  }
}

export default VideoPage;
