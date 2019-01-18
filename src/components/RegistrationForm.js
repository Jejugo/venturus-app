import React, { Component } from 'react';


class RegistrationForm extends Component {

  state = { 
    ride: ''
  }

  render() {
    return (
      <div className="registrationForm">
        <form className="formStyle">
          <div className="formBlock">
            <label for="username">Username</label>
            <input type="text" id="username" name="username"></input>
            <label for="name">Name</label>
            <input type="text" id="name" name="name"></input>
            <label for="email">E-mail</label>
            <input type="text" id="email" name="email"></input>
          </div>
          <div className="formBlock">
            <label for="city">City</label>
            <input type="text" id="city" name="city"></input>
            <label for="rideInGroup">Ride in Group?</label>
            <div className="radio">
              <label class="radioContainer">
                <input type="radio" name="radio"/>
                <span class="circle"></span> <span className="radioLabel">Always</span>
              </label>
              <label class="radioContainer">
                <input type="radio" name="radio"/>
                <span class="circle"></span> <span className="radioLabel">Sometimes</span>
              </label>
              <label class="radioContainer">
                <input type="radio" name="radio"/>
                <span class="circle"></span> <span className="radioLabel">Never</span>
              </label>
            </div>
            <label for="weekDays">Days of the Week</label>
            <div className="checkBox">
              <label class="container">One
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Two
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Three
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Four
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
