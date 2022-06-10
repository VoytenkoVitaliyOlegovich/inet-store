function parseGetJwt(request, fastify) {
    const authJWT = request.headers.authorization
    if(!authJWT) {
        throw new Error('JWT not valid')
    }
    try {
        return  fastify.jwt.decode(authJWT.slice(7))
    } catch {
        throw new Error('JWT not valid')
    }


}
module.exports = {
    parseGetJwt
}