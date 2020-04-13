const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    //email validáció
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is reqired";
    }
    else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    //pw validáció
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is reqired";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}