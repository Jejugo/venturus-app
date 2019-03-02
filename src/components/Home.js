import React, { Component } from 'react';
import validateInput from '../helper/validator';
import axios from 'axios';
import Table from  './Table';
import RegistrationDivider from './RegistrationDivider';
import RegistrationForm from './RegistrationForm';

class Home extends Component {

  state = { 
    username: '',
    name: '',
    email: '',
    address: {city: ''},
    ride: '',
    weekDays: [
    {id: 1, label: 'Sun', checked: false},
    {id: 2, label: 'Mon', checked: false}, 
    {id: 3, label: 'Tue', checked: false},
    {id: 4, label: 'Wed', checked: false},
    {id: 5, label: 'Thu', checked: false},
    {id: 6, label: 'Fri', checked: false},
    {id: 7, label: 'Sat', checked: false}],
    errors: {},
    submit: false
  }

  handleInputChange = (e) => {
    if(e.target.name === 'city'){
      this.setState({
        address: {city: e.target.value}
      });
    }
    else{
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  }

  handleRadio = (e) => {
    this.setState({
      ride: e.target.value
    });
  }
  handleCheckBox = (e) => {
    const value = e.target.value; 
    
    this.setState((previousState) => ({
      weekDays: previousState.weekDays.map(item => item.label === value 
        ? Object.assign(item, {checked: !item.checked}) 
        : item)
    }));

  }

  emptyFields = (e) => {
     this.setState({
        username: '',
        name: '',
        email: '',
        address: {city: ''},
        ride: '',
        weekDays: [
        {id: 1, label: 'Sun', checked: false},
        {id: 2, label: 'Mon', checked: false}, 
        {id: 3, label: 'Tue', checked: false},
        {id: 4, label: 'Wed', checked: false},
        {id: 5, label: 'Thu', checked: false},
        {id: 6, label: 'Fri', checked: false},
        {id: 7, label: 'Sat', checked: false}],
        errors: {}
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let res = validateInput(this.state);
    const { username, name, ride, weekDays, email } = this.state;

    if(Object.keys(res.errors).length === 0 && res.errors.constructor === Object){
      axios.post('http://localhost:3001/post/newuser', {username: username, name: name, ride: ride, weekDays: weekDays, email: email, address: {city: this.state.address.city}, albums: 0, photos: 0, posts: 0} /*{headers...}*/);
      this.setState({
        submit: true
      })
    }

    else{
      this.setState({
        errors: res.errors
      });
    }
    
  }

    render(){

      const { username, name, errors, email, address, ride, weekDays, submit } = this.state;

      return (
        <div className="home">
          <Table newRow={this.state} submit={submit} emptyFields={this.emptyFields}></Table>
          <RegistrationDivider></RegistrationDivider>
          <RegistrationForm username={username} 
          errors={errors}
          name={name} 
          email={email} 
          address={address} 
          ride={ride} 
          weekDays={weekDays}
          handleInputChange={this.handleInputChange}
          handleRadio={this.handleRadio}
          handleCheckBox={this.handleCheckBox}
          handleSubmit={this.handleSubmit}
          ></RegistrationForm>
        </div>
       );
    }
   
}

export default Home;
