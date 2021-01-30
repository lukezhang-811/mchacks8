import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

// screens
import TapScreen from './screens/tapscreen';
import Main from './screens/main';
import BreakDefault from "./screens/breakdefault";
import BackToWork from "./screens/backtowork"

class App extends Component {

  render()
  {
    return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/tap" component={TapScreen}/>
              <Route exact path="/break-default" component={BreakDefault}/>
              <Route exact path="/break-end" component={BackToWork}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;

