import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro'
import Research from './pages/Research'
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>

        <Route path="/Research">
          <Research />
        </Route>

        <Route path="/">
          <Intro />
        </Route>

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
