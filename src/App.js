import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import BreweriesContainer from './Container/BreweriesContainer';
import {Route, Switch, withRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/breweries' component={BreweriesContainer} />
        <Route path='/' component={Welcome} />
      </Switch>
    </div>
  )
}

export default withRouter(App);
