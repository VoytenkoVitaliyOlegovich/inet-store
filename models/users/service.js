const {validateCreate, validateSignIn, validateSignInMySQL} = require('./validate')
const hash = require('../../modules/cryptography/hash');
const {findOneByEmail, create, singIn} = require("./repository");


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

module.exports = {
    createUser,
    singUser
}
