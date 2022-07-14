import { db } from "../config/database.js"

interface User {
    email: string,
    encryptedPassword: string
}

// export async function signUpUser(user: User) {
//     db.
// }