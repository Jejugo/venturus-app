import React, { Component, Fragment } from 'react';

const Header = (props) => {

    return(
      <Fragment>
        <div className="breadcrumbContainer">
            <ul className="breadcrumb">
              <li><a className="breadcrumbItem" href="#"><i class="fas fa-home houseIcon"></i></a><i class="fas fa-angle-right"></i></li>
              <li><a className="breadcrumbItem" href="#">Page Name</a><i class="fas fa-angle-right"></i></li>
              <li><a className="breadcrumbItem" href="#">...</a><i class="fas fa-angle-right"></i></li>
              <li><a className="breadcrumbItem" href="#">Current Page</a><i class="fas fa-angle-right"></i></li>
            </ul>
        </div>
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
      </Fragment>
    );
}

export default Header;
