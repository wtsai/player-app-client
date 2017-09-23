import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Api from '../Api';
import ImageLink from '../share/ImageLink';

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

  render() {
    const path = (id) => `/video/${id}`;

    return (
      <div className="page">
        <OwlCarousel options={options}>
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
        </OwlCarousel>
      </div>
    );
  }
}

export default ChannelList;
