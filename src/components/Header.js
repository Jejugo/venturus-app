import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="box sportType">
          <i className="iconHeader fas fa-puzzle-piece fa-3x"></i>
          <p className="titleHeader">Sport Type</p>
          <h3 className="typeHeader">Cycling</h3>
        </div>
        <div className="box mode">
          <i className="iconHeader fas fa-trophy fa-3x"></i>
          <p className="titleHeader">Mode</p>
          <h3 className="typeHeader">Advanced</h3>
        </div>
        <div className="box route">
          <i className="iconHeader fas fa-map-signs fa-3x"></i>
          <p className="titleHeader">Route</p>
          <h3 className="typeHeader">30 miles</h3>
        </div>
      </div>
    );
  }
}

export default Header;
