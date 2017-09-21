import React, { Component } from 'react';
import Api from '../Api';
import './VideoPage.css';

const api = new Api();

function getVideo(id) {
  return api.getVideo(id).then(
    res => res
  );
}

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: {}};
  }

  componentWillMount() {
    getVideo(this.props.location.id).then(
      res => {
        this.setState({channel: res.channel});
      }
    );
  }

  render() {
    return (
      <div className="main-VideoPage">
        <h2>{this.props.location.id}</h2>
      </div>
    );
  }
}

export default VideoPage;
