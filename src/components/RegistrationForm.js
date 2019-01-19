import React, { Component } from 'react';
import validateInput from '../helper/validator';
import axios from 'axios';


class RegistrationForm extends Component {

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
    errors: {}
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
    if(Object.keys(res.errors).length === 0 && res.errors.constructor === Object){
      
      //axios.post('url', {params: }, {headers...});

      //... reset Form
      this.setState({
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
        {id: 7, label: 'Sat', checked: false}]
      })
    }
    else{
      this.setState({
        errors: res.errors
      });
    }
    
  }

  componentDidUpdate(){
    console.log("updated! ", this.state.errors);
  }

  render() {

    const { weekDays, username, name, email, city, errors } = this.state;
    return (
      <div className="registrationForm">
        <form onSubmit={this.handleSubmit}>
          <div className="formStyle">
            <div className="formBlock">
              <label htmlFor="username" className="titleInput">Username</label>
              <input type="text" id="username" name="username" value={username} onChange={this.handleInputChange}></input>
              {
                errors.user !== undefined && (
                  <label className="errorMessage">This field is Required.</label>
                )                
              }
              <label htmlFor="name" className="titleInput">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={this.handleInputChange}></input>
              {
                errors.name !== undefined && (
                  <label className="errorMessage">This field is Required.</label>
                )                
              }
              <label htmlFor="email" className="titleInput">E-mail</label>
              <input type="text" id="email" name="email" value={email} onChange={this.handleInputChange}></input>
              {
                errors.email !== undefined && (
                  <label className="errorMessage">This field is Required.</label>
                )                
              }
            </div>
            <div className="formBlock">
              <label htmlFor="city" className="titleInput">City</label>
              <input type="text" id="city" name="city" value={city} onChange={this.handleInputChange}></input>
              <label htmlFor="rideInGroup" className="titleInput">Ride in Group?</label>
              <div className="radio">
                <label className="radioContainer">
                  <input type="radio" name="radio" value="always" checked={this.state.ride === 'always'} onChange={this.handleRadio}/>
                  <span className="circle"></span> <span className="radioLabel">Always</span>
                </label>
                <label className="radioContainer">
                  <input type="radio" name="radio" value="sometimes" checked={this.state.ride === 'sometimes'} onChange={this.handleRadio}/>
                  <span className="circle"></span> <span className="radioLabel">Sometimes</span>
                </label>
                <label className="radioContainer">
                  <input type="radio" name="radio" value="never" checked={this.state.ride === 'never'} onChange={this.handleRadio}/>
                  <span className="circle"></span> <span className="radioLabel">Never</span>
                </label>
              </div>
              <label htmlFor="weekDays" className="titleInput">Days of the Week</label>
              <div className="checkBox">
                {weekDays.map(day => (
                  <label className="container" key={day.id}><span>{day.label}</span>
                  <input type="checkbox" checked={day.checked} value={day.label} onChange={this.handleCheckBox}/>
                  <span className="checkmark"></span>
                </label>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button className="btnForm" type="submit">Save</button>
            <button className="btnForm">Discard</button>
          </div>
        </form>
      </div>
    );
  }
  
}

export default RegistrationForm;
