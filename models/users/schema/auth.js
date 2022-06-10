module.exports = {
    schema: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
            password: {
                type: 'string'
            },
            email: {
                type: 'string'
            }
        }
    }
}