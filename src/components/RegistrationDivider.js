import React, { Component, Fragment } from 'react';

const RegistrationDivider = (props) => {
  
  return(
      <Fragment>
        <div className="registrationRow">
          <h2 className="rowTitle">Registration</h2>
          <hr className="rowLine"></hr>
        </div>
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
        <hr style={{width: "70%", margin: "3% auto"}}></hr>
      </Fragment>
  )
}

export default RegistrationDivider;
