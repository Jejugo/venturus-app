import React, { Component } from 'react';
import axios from 'axios';
import convertToString from '../helper/weekDaysArray';
import { retriveTableDataUsers, retriveTableDataPhotos, retriveTableDataAlbums, retriveTableDataPosts, retriveTableRideAndWeekDays} from '../services/api';

class Table extends Component {

  state = {
    tableData: [],
    query: '',
    filter: [],
    isLoading: false
  }

  componentWillReceiveProps(props){
    const { newRow } = this.props;
    const { tableData } = this.state;

    if (props.submit === true){
      let newRowNormalized = newRow;
      
      newRowNormalized.id = tableData.length + 1;
      let weekDaysString = convertToString(newRowNormalized.weekDays);
      newRowNormalized.weekDays = weekDaysString
      newRowNormalized.posts = 0;
      newRowNormalized.albums = 0;
      newRowNormalized.photos = 0;

      this.setState((prevState) => ({
        tableData: [...prevState.tableData, newRowNormalized]
      }));
    }
  }

  componentDidMount(){
      Promise.all([retriveTableDataUsers, 
      retriveTableDataPhotos, 
      retriveTableDataAlbums, 
      retriveTableDataPosts, 
      retriveTableRideAndWeekDays]).then(([users, photos, albums, posts, rideAndWeekDays]) => {

      let result = [];
      users.map(user => {

        let albumsArray = [];
        let postsArray = [];
        let photosArrayConcat = [];
        let weekDay = '';
        let rideValue = '';

        //given an user, create an array with the albums from that user
        albumsArray = albums.filter(album => {
          return album.userId === user.id;
        });
        
        //given an user, create an array with the posts from that user
        postsArray = posts.filter(post => {
          return post.userId === user.id;
        });

        //given the album array created, create a photo array with the photos that belong to that album.
        albumsArray.map(album => {
          let photosArray = photos.filter(photo => {
            return photo.albumId === album.id;
          });
          photosArrayConcat.push(...photosArray);
          return null;
        });

        //get ride and weekdays and link it to the user
        weekDay = rideAndWeekDays.filter(day => {
          return user.id === day._id;
        });
        
        rideValue = rideAndWeekDays.filter(rideItem => {
          return user.id === rideItem._id;
        });

        result.push({
          ...user,
          posts: postsArray.length,
          albums: albumsArray.length,
          photos: photosArrayConcat.length,
          ride: rideValue[0].ride,
          weekDays: weekDay[0].weekDays.join()
        });

        return null;
      });

      if(rideAndWeekDays.length > 10){
        rideAndWeekDays.map((item, index) => {
          if(index >= 10){
            let newWeekDays = convertToString(item.weekDays);
            item.weekDays = newWeekDays;
            this.setState((prevState) => ({
               tableData: [...prevState.tableData, item]
            }));
          }
        });
      }

     this.setState((prevState) => ({
        tableData: [...prevState.tableData, ...result]
      }));


    }).catch(err => {
      console.log('err ', err);
    });
  }

  handleSearchTable = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  handleDeleteRow = (e) => {
    let row = e.target.parentElement.parentElement;
    const username = row.cells[0].innerText;

    this.setState((previousState) => ({
      tableData: previousState.tableData.filter(data => data.username !== username)
    }));

    //delete request
    axios.delete(`http://localhost:3001/api/delete/${username}`, /*{headers...}*/)
    .then(response => {
      console.log(response);
    });
  }

  render() {

    const { tableData, query } = this.state;
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
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
                  <td><i className="trashIcon far fa-trash-alt" style={{cursor: "pointer"}} onClick={(e) => {if(window.confirm('Are you sure you want to delete this item?')){this.handleDeleteRow(e)};}}></i></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
