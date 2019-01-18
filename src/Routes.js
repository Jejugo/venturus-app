import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}></Route>

            </Switch>
        </BrowserRouter>
      </Fragment>

    );
  }
}

export default Routes;
