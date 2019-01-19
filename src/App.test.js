import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import validator from './helper/validator';

//Unit Testing...
it('validates if user insert valid input', () => {

  const data = { 
    username: 'Jeff',
    name: '123',
    email: 'abc@123.com',
    ride: 'always'
  }
  const response = validator(data);
  expect(response.errors).toEqual({});
});


it('validates if user insert invalid input', () => {

  const data = { 
    username: 'Jeff',
    name: '',
    email: 'abc@123.com',
    ride: 'always'
  }

  const data2 = { 
    username: 'Jeff',
    name: '123',
    email: '',
    ride: 'always'
  }
  const responseNoName = validator(data);
  const responseNoEmail = validator(data2);
  
  expect(responseNoName.errors).not.toBe({});
  expect(responseNoEmail.errs).not.toBe({});
});