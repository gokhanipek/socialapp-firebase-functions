const isEmail = (email) => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(emailRegEx)) return true;
    else return false;
}

const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
}

exports.validateSignupData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = 'email must not be empty';
    } else if(!isEmail(data.email)) {
        errors.email = 'must be a valid email address';
    }

    if(isEmpty(data.password)) errors.password = 'must not be empty';

    if(data.password !== data.confirmPassword) errors.confirmPassword = 'passwords must match';

    if(isEmpty(data.handle)) errors.handle = 'must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }

}


exports.validateLoginData  = (data) => {
    let errors = {};

    if(isEmpty(user.email)) errors.email = 'mnsut not be empty'
    if(isEmpty(user.password)) errors.password = 'mnsut not be empty'

    if(Object.keys(errors).length > 0 ) return res.status(400).json(errors);

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}