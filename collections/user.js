function userSerialize (user) {
    return {
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
}
module.exports = {
    userSerialize
}