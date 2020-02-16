import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { SUBMIT_FORM, DEL_EMP, EDIT_EMP } from '../actions/index';

const EmplyeeData = [
  {
    firstName: "FirstName1",
    lastName: "LastName1",
    email: "tempMail@domain.com",
    phone: '+6578273445',
    gender: "Female",
  },
  {
    firstName: "FirstName2",
    lastName: "LastName2",
    email: "tempMail@domain.com",
    phone: '+6578273678',
    gender: "Male",
  }];



  const formData = (state = EmplyeeData, action) => {
    switch (action.type) {
      case SUBMIT_FORM:
        return [...state, action.payLoad]
      case EDIT_EMP:
        const updatedValues = [...state]
       return [
        ...updatedValues.slice(0, action.payLoad.rowIndex),
        action.payLoad.values,
        ...updatedValues.slice(action.payLoad.rowIndex + 1),
       ]
       case DEL_EMP:
        const updatedRecords = [...state]
       return [
        ...updatedRecords.slice(0, action.payLoad),
        ...updatedRecords.slice(action.payLoad + 1),
       ]
      default:
        return state
    }
  }
  

const rootReducer = combineReducers({
  empData: formData,
  form: formReducer
});

export default rootReducer;
