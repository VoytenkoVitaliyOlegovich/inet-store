function userSerialize (user) {
    return {
        name: user.name,
        email: user.email,
        id: user.id
    }
}
module.exports = {
    userSerialize
}