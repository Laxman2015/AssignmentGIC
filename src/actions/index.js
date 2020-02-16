export const SUBMIT_FORM = 'SUBMIT_FORM';
export const DEL_EMP = 'DEL_EMP';
export const EDIT_EMP = 'EDIT_EMP';


/*
 * action creators
 */
export const delEmployee = (id) => {
    return { type: DEL_EMP, payLoad: id }
}
export const editEmployee = (id) => {
    return { type: EDIT_EMP, payLoad: id }
}
export const submitFormData = (data) => {
    return { type: SUBMIT_FORM, payLoad: data }
}
