module.exports = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'password'],
            properties: {
                name: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                }
            }
        }
    }
}