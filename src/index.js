import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ChannelList from './channel/ChannelList';
import Header from './header/Header';
import VideoPage from './video/VideoPage';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={Header}/>
      <Route exact path="/" component={ChannelList}/>
      <Route path="/video/:id" component={VideoPage}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
