import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Report } from '../pages';

class App extends Component {

  state = {
    lat: 37.5,
    lng: 127.04
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">                
        <Route exact path="/" component={Home} />
        <Switch>        
          <Route path="/report/:userId" component={Report} />
          <Route path="/report/" component={Report} />
        </Switch>
      </div>
    );
  }
}

export default App;
