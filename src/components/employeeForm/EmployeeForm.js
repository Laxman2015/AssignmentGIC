import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import validate from '../validation';
import styles from '../styles';
import { Link } from 'react-router-dom';
import { renderTextField, renderRadioGroup } from '../ui-component/InputElement'


const useStyles = makeStyles(styles);

const EmployeeForm = props => {
    const { handleSubmit, pristine, reset, submitting, empData } = props;
    const classes = useStyles();

    const handleSubmits = event => {
        event.preventDefault();
        handleSubmit();
    }
    return (
        <form onSubmit={handleSubmits} className={classes.formWidth} >
            <Grid item data-testid="empForm">
                <Field
                    name="firstName"
                    data-testid="fName"
                    component={renderTextField}
                    label="First Name"
                    fullWidth
                />
            </Grid>
            <Grid item>
                <Field name="lastName" data-testid="lName" component={renderTextField} label="Last Name" fullWidth />
            </Grid>
            <Grid item>
                <Field name="email" data-testid="data-email" component={renderTextField} label="Email" fullWidth />
            </Grid>
            <Grid item>
                <Field name="phone" component={renderTextField} label="Phone Number" fullWidth />
            </Grid>
            <Grid item md={12}>
                <Field name="gender" component={renderRadioGroup} className={classes.btnGroup}>
                    <RadioButton value="Male" label="Male" />
                    <RadioButton value="Female" label="Female" />
                </Field>
            </Grid>

            <Grid item className={classes.submitBtn}>
                <Button type="submit" variant="contained" color="primary" disabled={submitting}>
                    Submit
                </Button>
                <Button type="reset" variant="contained" className={classes.cancelBtn}>
                    <Link to="/employee">Cancel</Link>
                </Button>

            </Grid>
        </form>
    )
}

export default reduxForm({
    form: 'EmployeeForm', // a unique identifier for this form
    validate,
})(EmployeeForm)

