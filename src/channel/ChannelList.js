import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Api from '../Api';
import Channel from './Channel';

const api = new Api();

const options = {
    items: 5,
    margin: 10,
    nav: false,
    rewind: true,
    loop: true,
};

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

  handleClick(id) {
    api.getVideo(id).then(
      res => {
        console.log(res);
      }
    );
  }

  render() {
    return (
      <OwlCarousel options={options}>
          {
            this.state.channels.map((channel) => (
              <Channel
                key={channel._id}
                src={channel.cover.default}
                alt={channel.name}
                onClick={this.handleClick.bind(this, channel._id)}
              />
            ))
          }
      </OwlCarousel>
    );
  }
}

export default ChannelList;
