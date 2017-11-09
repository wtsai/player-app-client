import React, { Component } from 'react';
import windowSize from 'react-window-size';
import StaticList from './StaticList';
import config from '../../config/config';
import Api from '../../lib/Api';

const api = new Api();

function getChannels(skipNum, total) {
  return api.getLocalChannels(skipNum, total).then(
    res => res
  );
}

class StaticPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      videolist: false,
      leftpadding: 0
    };
  }

  componentDidUpdate() {
    if(this.state.videolist === false){
      const { windowWidth, windowHeight } = this.props;
      const skipNum = 0;
      console.log('[componentDidUpdate]width: ' + windowWidth + '. height: ' + windowHeight);
      if( windowWidth > 0 && windowHeight > 0 ){
        var width_count = parseInt(windowWidth/parseInt(config.icon.width, 10), 10);
        var height_count = parseInt((windowHeight-config.mainHeader.height)/parseInt(config.icon.height, 10), 10);
        var total = width_count*height_count;
        //console.log('width ' + width_count + 'x height ' + height_count + ' = total ' + total);
        //console.log('width_count * parseInt(config.icon.width) ' + width_count * parseInt(config.icon.width, 10));
        var Left_padding = (windowWidth-(width_count * parseInt(config.icon.width, 10)))/2;
        console.log('Left_padding: ' + Left_padding);
        getChannels(skipNum, total).then(
          res => {
            this.setState({channels: res});
            this.setState({videolist: true});
            this.setState({leftpadding: Left_padding});
            //document.getElementById("iconlist").style.leftpadding = Left_padding;
          }
        );
      }
    }
  }

  render() {
    return (
      <div>
        <StaticList channels={this.state.channels} leftpadding={this.state.leftpadding}/>
      </div>
    );
  }
}

export default windowSize(StaticPage);