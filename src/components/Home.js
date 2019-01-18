import React, { Component } from 'react';
import Header from './Header';
import Table from  './Table';
import RegistrationDivider from './RegistrationDivider';
import RegistrationForm from './RegistrationForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* <BreadCrumb></BreadCrumb> */}
        <Header></Header>
        <Table></Table>
        <RegistrationDivider></RegistrationDivider>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}

export default Home;
