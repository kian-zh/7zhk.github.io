import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './pages/Intro'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Intro />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
