import connection from '../../modules/db/mysql'
import UserRaw from "./userRaw";


export async function findOneByEmail(email:string): Promise<UserRaw|undefined> {

    const [users] = await connection.query(
        'SELECT * FROM users WHERE email = ? LIMIT 1',
        [email],
    );

    return users[0] ?? undefined;
}

export async function create(name: string, passwordHash: string, email: string, created_at:string) {

    const [{insertId}] = await connection.query(
        'INSERT INTO users (name, password, email, created_at) VALUES (?,?,?,?)',
        [name, passwordHash, email, created_at],
    );

    return insertId;
}

export async function findOneById(id:string|number) {

    const [users] = await connection.query('SELECT * FROM users WHERE id = ? limit 1', [id]);

    return users[0] ?? undefined;

}

export async function findAllUsers(limit:number, offset:number) {

    const [users] = await connection.query(`SELECT * FROM users LIMIT ${offset}, ${limit}`);

    return users ?? [];

}

export async function putUser(email:string, password:string, id:number, name:string) {

    const [users] = await connection.query(`UPDATE users SET ? WHERE id = ${id}`, {
        email: email,
        name: name,
        password: password,
    })

    return users[0] ?? undefined;

}

export async function deleteU(id:number) {

    const user = await connection.query(`delete from users where id = ${id}`)

    return user ?? undefined


}