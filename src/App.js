import React, { Component } from 'react';
import './App.css';
import './channel/ChannelList.css';
import ChannelList from './channel/ChannelList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Video Player</h2>
        </div>
        <ChannelList />
      </div>
    );
  }
}

export default App;
