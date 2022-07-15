import db from "../config/database.js";

export async function getCredentialByLabel(label: string) {
    return await db.credential.findUnique({
        where: { label }
    });
};