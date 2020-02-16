import React, { Fragment } from "react";
import { connect } from "react-redux";
import { submitFormData, editEmployee } from "../../actions/index";
import EmployeeForm from "./EmployeeForm";
import AlertDialog from "../AlertDialog";
import { Grid } from "@material-ui/core";

const AddEmployee = props => {
  const { submitForm, editEmployee, history, empData } = props;
  const isEdit = props.location && props.location.state;
  const rowData = isEdit ? props.location.state.rowData : {};
  const rowIndex = isEdit ? props.location.state.id : 0;
  const [isDublicate, SetIsDublicate] = React.useState(false);

  const handleSubmit = (values, e) => {
    const isDublicate = empData.some(
      item => JSON.stringify(item) === JSON.stringify(values)
    );
    if (isDublicate) {
      SetIsDublicate(true);
      return false;
    }
    if (Object.keys(rowData).length > 0) {
      editEmployee({ rowIndex, values });
      history.push("/employee");
      return;
    }
    submitForm(values);
    history.push("/employee");
  };

  return (
    <Grid
      item
      sm={12}
      direction="row"
      justify="center"
      container
      data-testid="addEmp"
    >
      <AlertDialog open={isDublicate} SetIsDublicate={SetIsDublicate} />
      <EmployeeForm onSubmit={handleSubmit} initialValues={rowData} />
    </Grid>
  );
};
const mapStateToProps = state => {
  return {
    empData: state.empData
  };
};

export default connect(mapStateToProps, {
  submitForm: submitFormData,
  editEmployee,
})(AddEmployee);
