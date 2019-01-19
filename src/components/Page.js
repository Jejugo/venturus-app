import React, { Component } from 'react';
import Header from './Header';

const Page = (props) => {
    return (
      <div className="page">
        <Header></Header>
        {props.children}
      </div>
    );
}

export default Page;
