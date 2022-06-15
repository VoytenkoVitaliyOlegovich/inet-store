import {FastifyInstance, FastifyRequest} from "fastify";
import JwtUserPayload from "../../../modules/jwt/payloads/user";

export function parseGetJwt(request:FastifyRequest, fastify:FastifyInstance): JwtUserPayload {
    const authJWT = request.headers.authorization
    if(!authJWT) {
        throw new Error('JWT not valid')
    }
    try {
        const payload = fastify.jwt.decode<JwtUserPayload>(authJWT.slice(7))

        if (null === payload) {
            throw new Error('JWT not valid')
        }

        return payload;
    } catch {
        throw new Error('JWT not valid')
    }

}