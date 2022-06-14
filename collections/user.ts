export function userSerialize (user: { name: string; email: string; id: string; }) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
}
export function userEditSerialize (user: { name: string; email: string; id: string; password: string }) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
            password: user.password
        }
    }
}
export function usersSerialize(users: [{name:string, email: string, id:string}]) {

    return  users.map((item) => {
        return {
            name: item.name,
            email: item.email,
            id: item.id
        }
    })

}
