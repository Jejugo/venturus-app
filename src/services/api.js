import axios from 'axios';


//USING API GIVEN BY VENTURUS

export const retriveTableDataUsers = new Promise(
  function(resolve, reject){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)

export const retriveTableDataPhotos = new Promise(
  function(resolve, reject){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)

export const retriveTableDataAlbums = new Promise(
  function(resolve, reject){
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)

export const retriveTableDataPosts = new Promise(
  function(resolve, reject){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)

//Using MONGODB

export const retriveTableRideAndWeekDays = new Promise(
  function(resolve, reject){
    axios.get('http://localhost:3001/api/users')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)