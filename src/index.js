import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ChannelList from './channel/ChannelList';
import Header from './header/Header';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={Header}/>
      <Route exact path="/" component={ChannelList}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
