"use strict";
exports.__esModule = true;
exports.validLimitOffset = exports.validateSignIn = exports.validateCreate = void 0;
var validator_1 = require("validator");
var bcrypt = require("bcrypt");
function validateCreate(email, password) {
    if (!validator_1["default"].isEmail(email)) {
        throw new Error('Email not valid');
    }
    if (password.length < 4) {
        throw new Error('Password must be > 4 char');
    }
}
exports.validateCreate = validateCreate;
function validateSignIn(email, passwordHash, password) {
    var isValidPassword = bcrypt.compareSync(password, passwordHash);
    console.log(isValidPassword);
    if (!validator_1["default"].isEmail(email) || password.length < 2 || !isValidPassword) {
        throw new Error('Not valid email or password');
    }
}
exports.validateSignIn = validateSignIn;
function validLimitOffset(limit, offset) {
    if (limit < 0 || offset < 0) {
        throw new Error('offset or limit must be > 0 ');
    }
}
exports.validLimitOffset = validLimitOffset;
