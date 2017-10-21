import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
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

  handleKnobChange(newValue) {
    this.setState({playing: false, playingVideo: this.state.videos[newValue-1]});
  }

  handleSelectorChange(newValue) {
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
        <div>
          <Knob
            className="main-Knob"
            bgColor="#000000"
            cursor={true}
            fgColor="#FFFFFF"
            inputColor="#000000"
            min={1}
            max={this.state.videos.length}
            onChange={this.handleKnobChange.bind(this)}
            value={this.state.playingVideo.labelKey+1}
            width={60}
            height={60}
          />
          <Selector
            className="main-Selector"
            autosize={false}
            value={this.state.playingVideo.value}
            options={this.state.videos}
            onChange={this.handleSelectorChange.bind(this)}
          />
        </div>
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
