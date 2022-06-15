import validator from "validator"
import * as bcrypt from 'bcrypt'

export function validateCreate(email:string, password:string) {
    if (!validator.isEmail(email)) {
        throw new Error('Email not valid');
    }
    if (password.length < 4) {
        throw new Error('Password must be > 4 char');
    }
}

export function validateSignIn(email:string, passwordHash:string, password:string) {

    const isValidPassword = bcrypt.compareSync(password, passwordHash)

    console.log(isValidPassword);
    if (!validator.isEmail(email) || password.length < 2 || !isValidPassword) {
        throw new Error('Not valid email or password');
    }
}

export function validLimitOffset(limit:number, offset:number) {
    if(limit < 0 || offset < 0 ) {
        throw new Error('offset or limit must be > 0 ');
    }
}