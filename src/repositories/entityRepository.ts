import { Credential, SafeNote, Wifi } from "@prisma/client";
import db from "../config/database.js";

type CreateCredential = Omit<Credential, "id" | "createdAT">;
type CreateSafeNote = Omit<SafeNote, "id" | "createdAT">;
type CreateWiFi = Omit<Wifi, "id" | "createdAT">;
type CreateEntity = CreateCredential | CreateSafeNote | CreateWiFi;

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

export async function getEntities(entity: string, userId: number) {
    return await db[entity].findMany({
        where: { userId }
    });
}

export async function deleteEntity(entity: string, id: number) {
    return await db[entity].delete({
        where: { id }
    });
}