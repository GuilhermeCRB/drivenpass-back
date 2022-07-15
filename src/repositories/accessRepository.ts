import db from "../config/database.js";

import { CreateUser } from "../services/accessService.js"

export async function saveUserData(userData: CreateUser) {
    await db.user.create({
        data: userData
    });
}

export async function getUserByEmail(email: string) {
    return await db.user.findUnique({
        where: { email }
    });
}