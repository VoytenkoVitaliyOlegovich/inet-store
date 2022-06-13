function userSerialize (user) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
}
function userEditSerialize (user) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
            password: user.password
        }
    }
}
function usersSerialize(users) {

    return  users.map((item) => {
        return {
            name: item.name,
            email: item.email,
            id: item.id
        }
    })

}
module.exports = {
    userSerialize,
    usersSerialize,
    userEditSerialize
}