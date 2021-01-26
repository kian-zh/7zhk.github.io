import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro'
import Research from './pages/Research'
import HttpPage from './pages/HttpPage'
import ColorPicker from './pages/ColorPicker'
import Resource from './pages/Resources';
import * as serviceWorker from './serviceWorker';
import './index.css'


ReactDOM.render(
    <HashRouter>
      <Switch>

        <Route path="/Research">
          <Research />
        </Route>

        <Route path="/HttpPage">
          <HttpPage />
        </Route>

        <Route path="/ColorPicker">
          <ColorPicker />
        </Route>

        <Route path="/Resource">
          <Resource />
        </Route>

        <Route path="/">
          <Intro />
        </Route>

      </Switch>
    </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
