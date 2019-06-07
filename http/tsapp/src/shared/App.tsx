import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Report, Nomatch } from '../pages';
import Menu from '../components/Menu'

//class App extends Component {
const App = () => {
  // render() {
  return (
    <div className="App">
      <Menu></Menu>      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/report/:userId" component={Report} />
        <Route path="/report/" component={Report} />
        <Route component={Nomatch} />
      </Switch>      
    </div>
  );
  // }
}

export default App;
