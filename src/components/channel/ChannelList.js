import React, { Component } from 'react';
import Api from '../../lib/Api';
import ImageLink from '../share/ImageLink';

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
    const path = (id) => `/video/${id}`;

    return (
      <div>
            {
              this.state.channels.map((channel) => (
                <ImageLink
                  key={channel._id}
                  src={channel.cover.default}
                  alt={channel.name}
                  path={path(channel._id)}
                />
              ))
            }
      </div>
    );
  }
}

export default ChannelList;
