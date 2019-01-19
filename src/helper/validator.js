import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
  let errors = {};

  if (Validator.isEmpty(data.username)){
    errors.user = 'This field is required.';
  }
  if(Validator.isEmpty(data.name)){
    errors.name = 'This field is required';
  }
  if(Validator.isEmpty(data.email)){
    errors.email = 'This field is required';
  }
  if(Validator.isEmpty(data.ride)){
    errors.ride = 'This field is required';
  }
  return {
    errors,
    isValid: isEmpty()
  }
}