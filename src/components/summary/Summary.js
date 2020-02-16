import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { delEmployee } from "../../actions/index";

import { columnDefs } from "../constants";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Summary = props => {
  const { empData, delEmpRecord } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={10} className={classes.btnContainer}>
        <Link to="/employee/add">
          <Button variant="contained" data-testid="link" color="primary">
            Add New
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        md={10}
        lg={10}
        direction="row"
        justify="center"
        className={classes.resulyGrid}
        container
      >
        <div
          className="ag-theme-balham"
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          <AgGridReact
            columnDefs={columnDefs(delEmpRecord)}
            rowData={empData}
          ></AgGridReact>
        </div>
      </Grid>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    empData: state.empData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delEmpRecord: (id) => {
      dispatch(delEmployee(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
