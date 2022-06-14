"use strict";
exports.__esModule = true;
var bcrypt = require("bcrypt");
function passwordHash(plainPassword, saltRounds) {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(plainPassword, salt, function (err, hash) {
                if (err) {
                    return reject(err);
                }
                return resolve(hash);
            });
        });
    });
}
exports["default"] = passwordHash;
