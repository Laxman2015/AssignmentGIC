import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, findAllByTestId, screen } from "@testing-library/react";

import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect"

import AddEmployee from "../components/employeeForm/AddEmployee";



import rootReducer from '../reducers/index';
import { Provider } from "react-redux";


describe("Test", () => {
  beforeAll(() => {})

  test("Render AddEmployee Component", () => {
    const push = jest.fn();
   const { container } = render(
      <Provider store={createStore(rootReducer)}>
        <MuiThemeProvider theme={getMuiTheme}>
          <Router>
          <AddEmployee history={push}/>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  
     expect(screen.getByTestId('addEmp')).toBeDefined();
  });

  test("EmployeeForm Component", () => {
    const push = jest.fn();
   const { container } = render(
      <Provider store={createStore(rootReducer)}>
        <MuiThemeProvider theme={getMuiTheme}>
          <Router>
          <AddEmployee history={push}/>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  
     expect(screen.getByTestId('empForm')).toBeDefined();
  });

})
