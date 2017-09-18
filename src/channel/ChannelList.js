import React, { Component } from 'react';
import Api from './api';
import Channel from './Channel';

const api = new Api();

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = {channels: []};
  }

  componentWillMount() {
    api.getChannelByLimit(3,20).then(
      res => {
        this.setState({channels: res});
      }
    );
  }

  render() {
    return (
      <div>
          {
            this.state.channels.map((channel) => (
              <Channel
                key= {channel._id}
                src= {channel.cover.default}
                alt= {channel.name}
              />
            ))
          }
      </div>
    );
  }
}

export default ChannelList;
