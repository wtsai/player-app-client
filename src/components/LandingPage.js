import React, { Component } from 'react';
import ChannelList from './channel/ChannelList';
import Header from './header/Header';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="page">
        <Header/>
        <ChannelList/>
      </div>
    );
  }
}

export default LandingPage;
