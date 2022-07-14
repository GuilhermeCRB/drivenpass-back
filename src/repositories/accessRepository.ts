import db from "../config/database.js";

import { CreateUser } from "../services/accessService.js"

export async function saveUserData(userData: CreateUser) {
    await db.user.create({
        data: userData
    });
}

export async function checkEmail(email: string) {
    await db.user.findUnique({
        where: { email }
    });
}