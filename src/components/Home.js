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
    city: '',
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
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRadio = (e) => {
    this.setState({
      ride: e.target.value
    });
  }
  handleCheckBox = (e) => {
    console.log(e.target.value);
    const value = e.target.value; 
    
    this.setState((previousState) => ({
      weekDays: previousState.weekDays.map(item => item.label === value 
        ? Object.assign(item, {checked: !item.checked}) 
        : item)
    }));

  }

  handleSubmit = (e) => {
    e.preventDefault();
    let res = validateInput(this.state);
    const { username, name, ride, weekDays, email, city } = this.state;
    if(Object.keys(res.errors).length === 0 && res.errors.constructor === Object){
      axios.post('http://localhost:3001/post/newuser', {user: username, name: name, ride: ride, weekDays: weekDays, email: email, address: city, albums: 0, photos: 0, posts: 0} /*{headers...}*/);
      this.setState({
        submit: true
      })
      // this.setState({
      //   username: '',
      //   name: '',
      //   email: '',
      //   city: '',
      //   ride: '',
      //   weekDays: [
      //   {id: 1, label: 'Sun', checked: false},
      //   {id: 2, label: 'Mon', checked: false}, 
      //   {id: 3, label: 'Tue', checked: false},
      //   {id: 4, label: 'Wed', checked: false},
      //   {id: 5, label: 'Thu', checked: false},
      //   {id: 6, label: 'Fri', checked: false},
      //   {id: 7, label: 'Sat', checked: false}],
      //   errors: {}
      // });
    }

    else{
      this.setState({
        errors: res.errors
      });
    }
    
  }

    render(){

      const { username, name, errors, email, city, ride, weekDays, submit } = this.state;
      console.log(submit);

      return (
        <div className="home">
          <Table newRow={this.state} submit={submit}></Table>
          <RegistrationDivider></RegistrationDivider>
          <RegistrationForm username={username} 
          errors={errors}
          name={name} 
          email={email} 
          city={city} 
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
