import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Table from './components/Table';
import RegistrationForm from './components/RegistrationForm';
import Page from './components/Page';
import { connect } from 'react-redux';
import { userLogInThunk } from './redux/actions/users';

class Routes extends Component {

  componentDidMount(){
    const { userLogInThunk } = this.props;
    userLogInThunk();
  }

  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <BrowserRouter>
            <Route render={() => (
              <Fragment>
                  <Page>
                    <Switch>
                      <Redirect exact from='/' to='/home'></Redirect>
                      <Route path='/home' component={Home}></Route>
                      <Route path='/users/new' component={RegistrationForm}></Route>
                      <Route path='/users' component={Table}></Route>
                    </Switch>
                  </Page>
              </Fragment>
              )}></Route>
        </BrowserRouter>
      </Fragment>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogInThunk: () => dispatch(userLogInThunk())
  }
}

export default connect(null, mapDispatchToProps)(Routes);
