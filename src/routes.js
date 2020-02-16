import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summary from './components/summary/Summary';
import AddEmployee from './components/employeeForm/AddEmployee';
import Header from './components/header/Header';

function Routers() {
  return (
    <Router>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={10}>

        <Header />
        </Grid>
        <Switch>
          <Route exact path="/employee" component={Summary} />
          <Route path="/employee/add" component={AddEmployee} />
          <Route path="/employee/edit/:id" component={AddEmployee} />
        </Switch>

      </Grid>
    </Router>
  );
}

export default Routers;