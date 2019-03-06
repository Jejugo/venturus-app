import React, { Component } from 'react';

class Table extends Component {

  state = {
    query: '',
    isLoading: false
  }

  handleSearchTable = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  render() {

    const { query } = this.state;
    const { handleDeleteRow, tableData } = this.props; 
    
    const showingTableRows = query === ''
    ? tableData : 
    tableData.filter(elem => (elem.username.toLowerCase().includes(query.toLowerCase()) 
    || elem.name.toLowerCase().includes(query.toLowerCase())));

    return (
      <div className="tableContainer">
        <div className="row">
          <h2 className="rowTitle">Users</h2>
          <hr className="rowLine"></hr>
          <div className="search">
              <div className="searchIcon">
                <i className="fas fa-search"></i>
              </div>
              <input className="rowSearch inputRoot inputInput" onChange={this.handleSearchTable} placeholder="Search by username or name..."/>
          </div>
        </div>
        <table id="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>City</th>
              <th>Ride in Group</th>
              <th>Day of the Week</th>
              <th>E-mail</th>
              <th>Posts</th>
              <th>Album</th>
              <th>Photos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              showingTableRows.map(data => (
                <tr key={data.id}>
                  <td>{data.username}</td>
                  <td>{data.name}</td>
                  <td>{data.address.city}</td>
                  <td>{data.ride}</td>
                  <td>{data.weekDays}</td>
                  <td>{data.email}</td>
                  <td>{data.posts}</td>
                  <td>{data.albums}</td>
                  <td>{data.photos}</td>
                  <td><i className="trashIcon far fa-trash-alt" style={{cursor: "pointer"}} onClick={(e) => {if(window.confirm('Are you sure you want to delete this item?')){handleDeleteRow(e)};}}></i></td>
                </tr>
              )).sort()
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
