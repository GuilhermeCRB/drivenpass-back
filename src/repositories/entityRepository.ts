import { Credential, SafeNote } from "@prisma/client";
import db from "../config/database.js";

type CreateCredential = Omit<Credential, "id" | "createdAT">;
type CreateSafeNote = Omit<SafeNote, "id" | "createdAT">;
type CreateEntity = CreateCredential | CreateSafeNote;

export async function getEntityByLabel(entity: string, label: string) {
    return await db[entity].findUnique({
        where: { label }
    });
};

export async function saveEntity(entity: string, entityData: CreateEntity) {
    await db[entity].create({
        data: entityData
    });
}

export async function getEntityById(entity: string, id: number) {
    return await db[entity].findUnique({
        where: { id }
    });
}

export async function getCredentials(entity: string, userId: number) {
    return await db[entity].findMany({
        where: { userId }
    });
}

export async function deleteCredential(entity: string, id: number) {
    return await db[entity].delete({
        where: { id }
    });
}