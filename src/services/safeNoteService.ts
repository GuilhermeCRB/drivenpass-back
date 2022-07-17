import { Response } from "express";

import { InputSafeNote } from "../schemas/safeNoteSchema.js";

import { TokenUser } from "../controllers/accessController.js";
import { deleteEntity, getEntities, saveEntity } from "../repositories/entityRepository.js";

export async function postSafeNote(res: Response) {
    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const safeNoteInputs: InputSafeNote = res.locals.data;
    const safeNote = formatSafeNote(safeNoteInputs, user.id);
    await saveEntity(entity, safeNote);
}

function formatSafeNote(safeNoteInputs: InputSafeNote, userId: number) {
    return ({
        ...safeNoteInputs,
        userId
    });
}

export async function getSafeNotes(entity: string, userId: number) {
    return await getEntities(entity, userId);
}

export async function eraseUserSafeNote(entity: string, id: number) {
    await deleteEntity(entity, id);
}