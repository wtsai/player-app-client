import React, { Component } from 'react';
import StaticList from './static/StaticList';
import Header from './header/Header';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <StaticList/>
      </div>
    );
  }
}

export default LandingPage;
