import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {

  state = {
    showDropDown: false
  }

  toggleDropdown = (e) => {
    this.setState((previousState) =>({
      showDropDown: !previousState.showDropDown
    }))
  }

  escFunction = (event) => {
    if(event.keyCode === 27){
      this.setState((previousState) =>({
        showDropDown: false
      }))
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {

    const { showDropDown } = this.state;
    const { userLogged } = this.props;
    console.log('user!!', userLogged);

    return (
      <div className="NavBar">
        <img src="/img/logo.png" className="logo" alt="logo"/>
        {
          userLogged !== undefined && (
            <p className="userDetail" onClick={this.toggleDropdown} style={{cursor: "pointer"}}><i className="fas fa-user-circle fa-lg"></i> {userLogged.username} <i style={{cursor: "pointer"}}className="fas fa-caret-down fa-lg"></i></p>
          )
        }
        {
          showDropDown === true && (
            <div className="dropdown"> 
              <ul>
                <li>Friends List</li>
                <li>Saved Items</li>
                <li>Notifications</li>
                <li>User Preferences</li>
                <hr></hr>
                <li>Log out</li>
              </ul>
             </div>
          )
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('store!!', state);
  return {
    userLogged: state.userLogged
  }
}

export default connect(mapStateToProps)(NavBar);
