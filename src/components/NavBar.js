import React, { Component } from 'react';

class Routes extends Component {
  render() {
    return (
      <div className="NavBar">
        <img src="/img/logo.png" className="logo" alt="logo"/>
        <p className="userDetail"><i className="fas fa-user-circle"></i> Jason Bourne <i className="fas fa-caret-down"></i></p>
      </div>
    );
  }
}

export default Routes;
