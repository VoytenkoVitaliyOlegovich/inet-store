import {createUser} from '../../../models/users/service'
import {FastifyInstance, FastifyServerOptions} from "fastify";
import {schemaCreateUser} from "../../../server/request/schema/users";
import {Static} from "@sinclair/typebox";
import {schemaLoginUser} from "../../../server/request/schema/users";
import {singUser} from "../../../models/users/service";
import JwtUserPayload from "../../../modules/jwt/payloads/user";
import {failResponse, sendToken} from "../../../server/response/utils";
import {parseGetJwt} from "../../../server/request/middleware/jwt";
import {findOneById} from "../../../models/users/repository";
import {userEditSerialize, userSerialize} from "../../../collections/user";

export default async function (fastify: FastifyInstance, opts: FastifyServerOptions) {

    const pathApi: string = '/api/auth'
    //signup
    fastify.post<{ Body: Static<typeof schemaCreateUser.body> }>(pathApi + '/signup', {
        schema: schemaCreateUser
    }, async (request, reply) => {
        const {name, password, email} = request.body
        return createUser(name, password, email);
    });

    //sign
    fastify.post<{ Body: Static<typeof schemaLoginUser.body> }>(pathApi + '/signin', {
        schema: schemaLoginUser
    }, (request, reply) => {
        const {password, email} = request.body
        return singUser(email, password)
            .then((user) => {
                const payload: JwtUserPayload = {id: user.id}
                const token = fastify.jwt.sign(payload)

                sendToken(reply, token)
            })
            .catch((err) => {
                failResponse(reply, err)
            });
    });

    //me
    fastify.get(pathApi + '/me', async (request, reply) => {

        const getIdJwt = parseGetJwt(request, fastify)

        const user = await findOneById(getIdJwt.id)


        if (user) {
            return userEditSerialize(user)
        } else {
            reply.statusCode = 403
            reply.send('user not found')
        }

    });

}
