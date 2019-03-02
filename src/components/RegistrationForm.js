import React, { Component } from 'react';


class RegistrationForm extends Component {



  render() {

    const { weekDays, username, name, email, city, errors, ride, handleInputChange, handleRadio, handleCheckBox, handleSubmit } = this.props;
    
    return (
      <div className="registrationForm">
        <form onSubmit={handleSubmit}>
          <div className="formStyle">
            <div className="formBlock">
              <label htmlFor="username" className="titleInput">Username</label>
              <input type="text" id="username" name="username" value={username} onChange={handleInputChange}></input>
              {
                errors.user !== undefined && (
                  <label className="errorMessage">This field is Required.</label>
                )                
              }
              <label htmlFor="name" className="titleInput">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={handleInputChange}></input>
              {
                errors.name !== undefined && (
                  <label className="errorMessage">This field is Required.</label>
                )                
              }
              <label htmlFor="email" className="titleInput">E-mail</label>
              <input type="text" id="email" name="email" value={email} onChange={handleInputChange}></input>
              {
                errors.email !== undefined && (
                  <label className="errorMessage">This field is Required.</label>
                )                
              }
            </div>
            <div className="formBlock">
              <label htmlFor="city" className="titleInput">City</label>
              <input type="text" id="city" name="city" value={city} onChange={handleInputChange}></input>
              <label htmlFor="rideInGroup" className="titleInput">Ride in Group?</label>
              <div className="radio">
                <label className="radioContainer">
                  <input type="radio" name="radio" value="always" checked={ride === 'always'} onChange={handleRadio}/>
                  <span className="circle"></span> <span className="radioLabel">Always</span>
                </label>
                <label className="radioContainer">
                  <input type="radio" name="radio" value="sometimes" checked={ride === 'sometimes'} onChange={handleRadio}/>
                  <span className="circle"></span> <span className="radioLabel">Sometimes</span>
                </label>
                <label className="radioContainer">
                  <input type="radio" name="radio" value="never" checked={ride === 'never'} onChange={handleRadio}/>
                  <span className="circle"></span> <span className="radioLabel">Never</span>
                </label>
              </div>
              <label htmlFor="weekDays" className="titleInput">Days of the Week</label>
              <div className="checkBox">
                {weekDays.map(day => (
                  <label className="container" key={day.id}><span>{day.label}</span>
                  <input type="checkbox" checked={day.checked} value={day.label} onChange={handleCheckBox}/>
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
