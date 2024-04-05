function Validation(values) {
    let error = {}
    if(values.fname === "") {
        error.fname = "First Name should not be empty"
    }
    else {
        error.fname = ""
    }
    if(values.lname === "") {
        error.lname = "Last Name should not be empty"
    }
    else {
        error.lname = ""
    }
    if(values.email === "") {
        error.email = "email should not be empty"
    }
    else {
        error.email = ""
    }
    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else {
        error.password = ""
    }

return error;
}
export default Validation; 