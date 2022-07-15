import { Credential } from "@prisma/client";
import db from "../config/database.js";

type CreateCredential = Omit<Credential, "id" | "createdAT">;

export async function getCredentialByLabel(label: string) {
    return await db.credential.findUnique({
        where: { label }
    });
};

export async function saveCredential(credential: CreateCredential) {
    await db.credential.create({
        data: credential
    });
}

export async function getCredentialById(id: number) {
    return await db.credential.findUnique({
        where: { id }
    });
}

export async function getCredentials(userId: number) {
    return await db.credential.findMany({
        where: { userId }
    });
}