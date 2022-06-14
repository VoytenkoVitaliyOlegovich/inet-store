"use strict";
exports.__esModule = true;
exports.usersSerialize = exports.userEditSerialize = exports.userSerialize = void 0;
function userSerialize(user) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    };
}
exports.userSerialize = userSerialize;
function userEditSerialize(user) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
            password: user.password
        }
    };
}
exports.userEditSerialize = userEditSerialize;
function usersSerialize(users) {
    return users.map(function (item) {
        return {
            name: item.name,
            email: item.email,
            id: item.id
        };
    });
}
exports.usersSerialize = usersSerialize;
