export default function (values) {
    const errors = {};
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'phone',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is Required';
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (
        values.phone &&
        !/^\+65(6|7|8|9)\d{7}$/i.test(values.phone)
    ) {
        errors.phone = 'Invalid phone number, Should be like +6588888888';
    }

    /^\+65(6|8|9)\d{7}$/;
    return errors;
}