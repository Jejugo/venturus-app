import React, { Component } from 'react';

class RegistrationDivider extends Component {
  render() {
    return (
      <div className="registrationDivider">
        <div className="box sportType">
          <h3>Need Help?</h3>
          <div className="boxIn">
            <i className="iconHeader fa fa-life-ring fa-4x"></i>
            <p className="titleHeader">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="box mode">
        <h3>Why register?</h3>
          <div className="boxIn">
            <i className="iconHeader fas fa-heartbeat fa-4x"></i>
            <p className="titleHeader">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="box route">
        <h3>What people are saying...</h3>
          <div className="boxIn">
            <i className="iconHeader far fa-smile fa-4x"></i>
            <p className="titleHeader">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationDivider;
