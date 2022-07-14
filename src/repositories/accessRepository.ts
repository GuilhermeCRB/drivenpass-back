import { User } from "@prisma/client"
import db from "../config/database.js"

type CreateUser = Omit<User, "id" | "createdAT">

export async function signUpUser(userData: CreateUser) {
    await db.user.create({
        data: userData
    });
}