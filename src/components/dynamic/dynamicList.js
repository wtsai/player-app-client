import React, { Component } from 'react';
import ImageIcon from '../share/ImageIcon';
import './dynamicList.css';

class dynamicList extends Component {
  render() {
    let path = (id) => `/channel/${id}`;
    let videolist = [];
    if(this.props.channels){
      this.props.channels.map((channel) => (
        videolist.push(
          <ImageIcon
            key={channel._id}
            alt={channel._id}
            src={channel.cover.default}
            title={channel.name}
            path={path(channel._id)}
            className='ImageIcon'
            />
        )
      ))
    }

    return (
      <div id='iconlist' style={{ 'paddingLeft': this.props.leftpadding }}>
        {videolist}
      </div>
    );
  }
}

export default dynamicList;
