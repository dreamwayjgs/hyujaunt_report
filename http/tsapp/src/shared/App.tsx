import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Report, Nomatch } from '../pages';
import Header from '../components/Header'

//class App extends Component {
const App = () => {
  // render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />              
        <Route path="/report/:userId/:LatLng" component={Report} />
        <Route path="/report/:userId" component={Report} />        
        <Route path="/report/" component={Report} />
        <Route component={Nomatch} />
      </Switch>      
    </div>
  );
  // }
}

export default App;
