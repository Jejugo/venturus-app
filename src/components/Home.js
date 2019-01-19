import React, { Component } from 'react';
import Table from  './Table';
import RegistrationDivider from './RegistrationDivider';
import RegistrationForm from './RegistrationForm';

const Home = (props) => {
    return (
      <div className="home">
        <Table></Table>
        <RegistrationDivider></RegistrationDivider>
        <RegistrationForm></RegistrationForm>
      </div>
    );
}

export default Home;
