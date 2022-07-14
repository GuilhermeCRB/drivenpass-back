import bcrypt from "bcrypt";

import { User } from "@prisma/client";
import { saveUserData } from "../repositories/accessRepository.js";

export type CreateUser = Omit<User, "id" | "createdAT">

export async function signUpUser(user: CreateUser) {
    const encryptedPassword: string = encryptPassword(user.password);
    await saveUserData({ ...user, password: encryptedPassword });
}

function encryptPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
}