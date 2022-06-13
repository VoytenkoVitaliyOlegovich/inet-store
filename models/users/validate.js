const validator = require("validator");
const bcrypt = require('bcrypt')

function validateCreate(email, password) {
    if (!validator.isEmail(email)) {
        throw new Error('Email not valid');
    }
    if (!password.length > 2) {
        throw new Error('Password must be > 2 char');
    }
}

function validateSignIn(email, passwordHash, password) {

    const isValidPassword = bcrypt.compareSync(password, passwordHash)

    if (!validator.isEmail(email) || password.length < 2 || !isValidPassword) {
        throw new Error('Not valid email or password');
    }
}

function validLimitOffset(limit, offset) {
    if(limit < 0 || offset < 0 ) {
        throw new Error('offset or limit must be > 0 ');
    }
}

module.exports = {
    validateCreate,
    validateSignIn,
    validLimitOffset
}
