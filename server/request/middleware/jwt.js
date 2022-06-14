"use strict";
exports.__esModule = true;
exports.parseGetJwt = void 0;
function parseGetJwt(request, fastify) {
    var authJWT = request.headers.authorization;
    if (!authJWT) {
        throw new Error('JWT not valid');
    }
    try {
        var payload = fastify.jwt.decode(authJWT.slice(7));
        if (null === payload) {
            throw new Error('JWT not valid');
        }
        return payload;
    }
    catch (_a) {
        throw new Error('JWT not valid');
    }
}
exports.parseGetJwt = parseGetJwt;
