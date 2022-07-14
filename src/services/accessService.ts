import bcrypt from "bcrypt";

export function encryptPassword(password: string){
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
}