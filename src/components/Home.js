import React, { Component } from 'react';
import Table from  './Table';
import RegistrationDivider from './RegistrationDivider';
import RegistrationForm from './RegistrationForm';
import axios from 'axios';
import convertToString from '../helper/weekDaysArray';
import { retriveTableDataUsers, retriveTableDataPhotos, retriveTableDataAlbums, retriveTableDataPosts, retriveTableRideAndWeekDays} from '../services/api';

class Home extends Component {

    state = {
      submit: false,
      tableData: [],
      postRow: ''
    }
    
    didSubmit = (postRow) => {
      this.setState({
        submit: true,
        postRow: postRow
      });
    }

    handleDeleteRow = (e) => {

      let row = e.target.parentElement.parentElement;
      const username = row.cells[0].innerText;
  
      this.setState((previousState) => ({
        tableData: previousState.tableData.filter(data => data.username.toLowerCase() !== username.toLowerCase())
      }));
  
      //delete request
      axios.delete(`http://localhost:3001/api/delete/${username}`, /*{headers...}*/)
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.log('Some error ocurred: ', err);
      });
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
    
    addFormRow = (postRowNormalized) => {
      let newState = [...this.state.tableData, postRowNormalized];
      this.setState({
        tableData: newState,
        submit: false
      });
    }


    componentDidUpdate(prevProps, prevState){
      if(this.state.submit === true){
        const { postRow, tableData} = this.state;
        let postRowNormalized = postRow;
        let weekDaysString = convertToString(postRowNormalized.weekDays);
        postRowNormalized.weekDays = weekDaysString;
        postRowNormalized.id = tableData.length + 1;
  
        this.addFormRow(postRowNormalized);
        console.log(postRowNormalized.weekDays);
      }
    }
    
    render(){

      const { submit, tableData, postRow } = this.state;

      return (
        <div className="home">
          <Table submit={submit} tableData={tableData} handleDeleteRow={this.handleDeleteRow}></Table>
          <RegistrationDivider></RegistrationDivider>
          <RegistrationForm didSubmit={this.didSubmit} tableData={tableData}></RegistrationForm>
        </div>
       );
    }
   
}

export default Home;
