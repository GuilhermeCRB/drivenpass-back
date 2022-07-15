import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { TokenUser } from "../controllers/accessController.js";
import { saveUserData } from "../repositories/accessRepository.js";

export type CreateUser = Omit<User, "id" | "createdAT">;

export async function signUpUser(user: CreateUser) {
    const encryptedPassword = encryptPassword(user.password);
    await saveUserData({ ...user, password: encryptedPassword });
}

function encryptPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
}

export function generateToken(user: TokenUser){
    return jwt.sign(user, process.env.SECRET_KEY);
}