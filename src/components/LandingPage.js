import React, { Component } from 'react';
//import StaticPage from './static/StaticPage';
import DynamicPage from './dynamic/dynamicPage';
import Header from './header/Header';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <DynamicPage/>
      </div>
    );
  }
}

export default LandingPage;
