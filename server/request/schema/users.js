"use strict";
exports.__esModule = true;
exports.schemaDeleteUser = exports.schemaLoginUser = exports.schemaCreateUser = exports.schemaUpdateUser = exports.schemaGetUser = exports.schemaPaginateUsers = void 0;
var typebox_1 = require("@sinclair/typebox");
exports.schemaPaginateUsers = {
    querystring: typebox_1.Type.Strict(typebox_1.Type.Object({
        limit: typebox_1.Type.Number(),
        offset: typebox_1.Type.Number()
    }))
};
exports.schemaGetUser = {
    params: typebox_1.Type.Strict(typebox_1.Type.Object({
        id: typebox_1.Type.Number()
    }))
};
exports.schemaUpdateUser = {
    body: typebox_1.Type.Strict(typebox_1.Type.Object({
        name: typebox_1.Type.String(),
        email: typebox_1.Type.String(),
        password: typebox_1.Type.String(),
        id: typebox_1.Type.Number()
    }))
};
exports.schemaCreateUser = {
    body: typebox_1.Type.Strict(typebox_1.Type.Object({
        name: typebox_1.Type.String(),
        email: typebox_1.Type.String(),
        password: typebox_1.Type.String()
    }))
};
exports.schemaLoginUser = {
    body: typebox_1.Type.Strict(typebox_1.Type.Object({
        email: typebox_1.Type.String(),
        password: typebox_1.Type.String()
    }))
};
exports.schemaDeleteUser = typebox_1.Type.Object({});
