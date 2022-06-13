const connection = require('../../modules/db/mysql');

async function findOneByEmail(email) {

    const [users] = await connection.query(
        'SELECT email FROM users WHERE email = ? LIMIT 1',
        [email],
    );

    return users[0] ?? undefined;
}

async function create(name, passwordHash, email) {

    const [{insertId}] = await connection.query(
        'INSERT INTO users (name, password, email) VALUES (?,?,?)',
        [name, passwordHash, email],
    );

    return insertId;
}

async function singIn(email, password) {


    const [user] = await connection.query('SELECT * FROM users WHERE email = ? limit 1', [email]);

    return user ?? undefined;

}

async function findOneById(id) {

    const [users] = await connection.query('SELECT * FROM users WHERE id = ? limit 1', [id]);

    return users[0] ?? undefined;

}

async function findAllUsers(limit, offset) {

    const [users] = await connection.query(`SELECT * FROM users LIMIT ${offset}, ${limit}`);

    return users ?? undefined;

}

async function putUser(user) {

    const [users] = await connection.query(`UPDATE users SET ? WHERE id = ${user.id}`, {
        email: user.email,
        name: user.name,
        password: user.password,
    })

    return users[0] ?? undefined;

}


module.exports = {
    findOneByEmail,
    findOneById,
    findAllUsers,
    create,
    singIn,
    putUser
}
