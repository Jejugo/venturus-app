import axios from 'axios';

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

export const retriveTableRide = new Promise(
  function(resolve, reject){
    axios.get('http://localhost:3001/ride-group')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)

export const retriveTableWeekDays = new Promise(
  function(resolve, reject){
    axios.get('http://localhost:3001/week-days')
    .then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    });
  }
)