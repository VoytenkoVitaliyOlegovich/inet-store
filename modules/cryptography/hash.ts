import * as bcrypt from "bcrypt"

export default function passwordHash(plainPassword:string, saltRounds:number): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                return reject(err)
            }

            bcrypt.hash(plainPassword, salt, function (err, hash) {
                if (err) {
                    return reject(err)
                }

                return resolve(hash);
            })
        })
    });
}