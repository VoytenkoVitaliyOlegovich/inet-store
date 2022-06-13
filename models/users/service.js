const {validateCreate, validateSignIn, validLimitOffset} = require('./validate')
const hash = require('../../modules/cryptography/hash');
const {findOneByEmail, create, singIn, findAllUsers, findOneById} = require("./repository");


const SALT_ROUNDS = 10;

async function createUser(name, plainPassword, email) {
    validateCreate(email, plainPassword)

    const user = await findOneByEmail(email);

    if (user !== undefined) {
        throw new Error('User with this email already exists');
    }

    const hashPassword = await hash.passwordHash(plainPassword, SALT_ROUNDS)

    return create(name, hashPassword, email);
}

async function singUser(email, password) {

    const [user] = await singIn(email)
    validateSignIn(user.email, user.password, password)
    return user

}

async function getUsers(limit, offset) {
    validLimitOffset(limit, offset)

    return await findAllUsers(limit, offset)
}

async function getUser(id) {

    return findOneById(id)

}


module.exports = {
    createUser,
    singUser,
    getUsers,
    getUser
}
