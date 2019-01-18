import React, { Component } from 'react';
import { retriveTableDataUsers, retriveTableDataPhotos, retriveTableDataAlbums, retriveTableDataPosts, retriveTableRide, retriveTableWeekDays } from '../services/api';

class Table extends Component {

  state = {
    tableData: [],
    query: '',
    filter: []
  }

  componentDidMount(){
    Promise.all([retriveTableDataUsers, 
      retriveTableDataPhotos, 
      retriveTableDataAlbums, 
      retriveTableDataPosts, 
      retriveTableRide, 
      retriveTableWeekDays]).then(([users, photos, albums, posts, ride, weekDays]) => {

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

        postsArray = posts.filter(post => {
          return post.userId === user.id;
        });

        //given the album array created, create a photo array with the photos that belong to that album.
        albumsArray.map(album => {
          let photosArray = photos.filter(photo => {
            return photo.albumId === album.id;
          });
          photosArrayConcat.push(...photosArray);
        });

        //get ride and weekdays and link it to the user
        weekDay = weekDays.filter(day => {
          return user.id === day.userId;
        });
        
        rideValue = ride.filter(rideItem => {
          return user.id === rideItem.userId;
        });


        result.push({
          ...user,
          posts: postsArray.length,
          albums: albumsArray.length,
          photos: photosArrayConcat.length,
          ride: rideValue[0].ride,
          weekDays: weekDay[0].weekDays.join()
        });
      });

      this.setState({
        tableData: result
      });

      return null;

    }).catch(err => {
      console.log('err ', err);
    })
  }

  handleSearchTable = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  render() {

    const { tableData, query } = this.state;

    const showingTableRows = query === ''
    ? tableData : 
    tableData.filter(elem => (elem.username.toLowerCase().includes(query.toLowerCase())));

    return (
      <div className="tableContainer">
        <div className="row">
          <h2 className="rowTitle">Users</h2>
          <hr className="rowLine"></hr>
          <input className="rowSearch" onChange={this.handleSearchTable}></input>
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
