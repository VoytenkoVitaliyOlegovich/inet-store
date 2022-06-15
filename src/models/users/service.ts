import {validateCreate, validateSignIn, validLimitOffset} from './validate'
import passwordHash from '../../modules/cryptography/hash'
import {findOneByEmail, create, findAllUsers, findOneById, putUser, deleteU} from "./repository"
import UserRaw from "./userRaw";


const SALT_ROUNDS = 10;

export async function createUser(name: string, plainPassword: string, email: string, created_at:string) {
    validateCreate(email, plainPassword)

    const user = await findOneByEmail(email);

    if (user !== undefined) {
        throw new Error('User with this email already exists');
    }

    const hashPassword = await passwordHash(plainPassword, SALT_ROUNDS)

    return create(name, hashPassword, email, created_at);
}

export async function singUser(email:string, password:string): Promise<UserRaw> {

    const user = await findOneByEmail(email)

    if (!user) {
        throw new Error('User not found'); // TODO
    }


    validateSignIn(user.email, user.password, password)


    return user

}

export async function getUsers(limit:number, offset:number) {
    validLimitOffset(limit, offset)

    return await findAllUsers(limit, offset)
}

export async function getUser(id:number) {

    return findOneById(id)

}

export async function editUser(email:string, password:string, id:number, name:string) {
    validateCreate(email, password)

    password = await passwordHash(password, SALT_ROUNDS)

    return putUser(email, password, id, name)

}

export async function deleteUser(id:number) {
    return deleteU(id)
}
