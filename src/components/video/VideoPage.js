import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import Api from '../../lib/Api';
import ImageLink from '../share/ImageLink';
import homeImage from '../../image/home.svg';
import Selector from 'react-select';
import 'react-select/dist/react-select.css';
import Video from './Video';
import './VideoPage.css';

const api = new Api();

function getVideo(id) {
  return api.getLocalVideo(id).then(
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
          let channel = res.channel;
          let videos = channel.contents_order.map((order, index) => {
            let findvideo = channel.contents.find(function(item, index, array){
              return item._id === order;
            });
            return Object.assign({}, {value: findvideo.youtube_id, label: findvideo.name, labelKey: index});
          });
          this.setState({
            channel,
            playingVideo: {
              value: videos[0].value,
              label: videos[0].label,
              labelKey: videos[0].labelKey,
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
    const homePath = '/';
    return (
      <div className="main-VideoPage page">
        <div className="playing-Header">
          <ImageLink className="playing-column-left" src={homeImage} alt="home" path={homePath}/>
          <span className="playing-Selector">
              <Selector
                value={this.state.playingVideo.value}
                options={this.state.videos}
                onChange={this.handleSelectorChange.bind(this)}
              />
          </span>
            <Knob
              className="main-Knob-right"
              bgColor="#FFFFFF"
              cursor={true}
              fgColor="#000000"
              inputColor="#FFFFFF"
              min={1}
              max={this.state.videos.length}
              onChange={this.handleKnobChange.bind(this)}
              value={this.state.playingVideo.labelKey+1}
              width={90}
              height={90}
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
