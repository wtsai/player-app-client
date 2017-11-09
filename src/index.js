import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './index.css';
import routes from './router.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
