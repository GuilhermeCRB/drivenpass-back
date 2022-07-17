import { SafeNote } from "@prisma/client";
import { Request, Response } from "express";

import { eraseUserSafeNote, getSafeNotes, postSafeNote } from "../services/safeNoteService.js";

export async function createSafeNote(req: Request, res: Response) {
    await postSafeNote(res);
    return res.sendStatus(201);
}

export async function findSafeNote(req: Request, res: Response) {
    const safeNote: SafeNote | undefined = res.locals.entityData;
    const { id }: { id: number } = res.locals.user;

    if (safeNote) {
        return res.status(200).send(safeNote);
    } else {
        const entity: string = res.locals.entity;
        const safeNotesArray = await getSafeNotes(entity, id);
        return res.status(200).send(safeNotesArray);
    }
}

export async function eraseSafeNote(req: Request, res: Response) {
    const id: number = res.locals.id;
    const entity: string = res.locals.entity;
    await eraseUserSafeNote(entity, id);
    return res.sendStatus(204);
}