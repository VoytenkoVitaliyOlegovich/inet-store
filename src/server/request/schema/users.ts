import {Type} from "@sinclair/typebox";


export const schemaPaginateUsers = {
    querystring: Type.Strict(Type.Object({
        limit: Type.Number(),
        offset: Type.Number(),
    }))
}

export const schemaGetUser = {
    params: Type.Strict(Type.Object({
        id: Type.Number(),
    }))
}

export const schemaUpdateUser = {
    body: Type.Strict(Type.Object({
        name: Type.String(),
        email: Type.String(),
        password: Type.String(),
        id: Type.Number(),
    }))
}
export const schemaCreateUser = {
    body: Type.Strict(Type.Object({
        name: Type.String(),
        email: Type.String(),
        password: Type.String(),
    }))
}
export const schemaLoginUser = {
    body: Type.Strict(Type.Object({
        email: Type.String(),
        password: Type.String(),
    }))
}

export const schemaDeleteUser = {
    params: Type.Strict(Type.Object({
        id: Type.String(),
    }))
}
