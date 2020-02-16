import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, findAllByTestId, screen } from "@testing-library/react";

import { createStore } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import AddEmployee from "../components/employeeForm/AddEmployee";
import EmployeeForm from "../components/employeeForm/EmployeeForm";

import rootReducer from "../reducers/index";
import { Provider } from "react-redux";

describe("Test", () => {
  beforeAll(() => {});
  const empData = [
    {
      firstName: "FirstName1",
      lastName: "LastName1",
      email: "tempMail@domain.com",
      phone: "+6578273445",
      gender: "Female"
    }
  ];
  test("Test EmployeeForm Component", () => {
    const { container } = render(
      <Provider store={createStore(rootReducer)}>
        <MuiThemeProvider theme={getMuiTheme}>
          <Router>
            <EmployeeForm initialValues={empData} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId("empForm")).toBeDefined();

    expect(screen.getByTestId('fName')).toBeDefined();
  });
});
